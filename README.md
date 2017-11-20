AngularX blurred image component.

## Installation

Install the npm package.

    npm i ngx-blurred-image
        
Import module:

    import { BlurredImageComponent } from 'ngx-blurred-image/components';
     
    @NgModule({
        declarations: [ BlurredImageComponent ]
    })

## Usage
    
	<div blurred-image
		[small]="base64"
		preview="/assets/img/annie-spratt-419262-preview.jpg"
		[size]="{width: 880, height: 587}"
	></div>

## Properties

| name             | type                                | description                                       |
|------------------|-------------------------------------|---------------------------------------------------|
| small            | string                              | Thumbnail image in base64 format.                 |
| preview          | string                              | Path to full-size image.                          |
| size             | object                              | Width and height of the container with the image. |
| delay            | number                              | The delay in ms before showing the image.         |

## Demo
http://crystalui.org/components/blurred-image/example