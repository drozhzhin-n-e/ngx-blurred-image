import { Component, ElementRef, HostListener, OnInit, Input, ViewChild } from '@angular/core';

@Component({
    selector: '[blurred-image]',
    templateUrl: './blurred-image.component.html',
    styleUrls: ['./blurred-image.component.css']
})

export class BlurredImageComponent {

    elem: any;
	preview: any = {};
    small: any = {};

	@Input('small')
    set smallPath(value: any) {
        if (value) {
            this.small.path = value;
        }
    }

	@Input('preview')
    set previewPath(value: any) {
        if (value) {
            this.preview.path = value;
        }
    }

    @Input() delay: number = 1000;
    @Input() size: any = {};

    @ViewChild('previewElem') previewElem: ElementRef;

	constructor(private elementRef: ElementRef){
        this.elem = this.elementRef.nativeElement;
    }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        if (this.checkElemPosition()){
        	this.show();
        }
    }

    @HostListener('window:resize', [])
    onWindowResize() {
        this.setElemSize();
    }

    ngOnInit(): void {
        if (this.checkElemPosition()){
            this.show();
        }

        this.setElemSize();
    }

    show(){ 
    	this.preview.ready = true;
        this.small.ready = true;
    }

    onLoaded(event: any){
        setTimeout(() => {
            this.small.loaded = true;
        }, this.delay/2);

        setTimeout(() => {
            this.preview.loaded = true;
        }, this.delay);
    }

    getComputedHeight(){
        return this.elem.offsetWidth * (this.size.height / this.size.width);
    }

    setElemSize(){
        this.elem.style.width = this.size.width + 'px';
        this.elem.style.height = this.getComputedHeight() + 'px';
    }

    checkElemPosition(){
        return window.pageYOffset + window.innerHeight*2 >= this.elem.offsetTop;
    }
}