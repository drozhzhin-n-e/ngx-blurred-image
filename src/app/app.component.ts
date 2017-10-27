import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app works!';

	base64: any = [
		'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABMAAD/4QMtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkzOUIzNzJCQkFEQjExRTdBNTI5RDE5Q0Q0QkQ3NkVGIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkzOUIzNzJBQkFEQjExRTdBNTI5RDE5Q0Q0QkQ3NkVGIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0QTVGOUI4QUJBODgxMUU3ODNCOEY2Njg0MjJDODEwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0QTVGOUI4QkJBODgxMUU3ODNCOEY2Njg0MjJDODEwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAMCAgICAgMCAgMEAwIDBAUEAwMEBQYFBQUFBQYIBgcGBgcGCAgJCQoJCQgMDAwMDAwNDQ0NDQ8PDw8PDw8PDw8BAwMDBgYGCwgICxENCw0RFA8PDw8UEQ8PDw8PEREPDw8PDw8RDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PD//AABEIABsAKAMBEQACEQEDEQH/xACTAAACAgMBAAAAAAAAAAAAAAAEBgUIAgMJBwEAAgMBAAAAAAAAAAAAAAAAAwQAAQIFEAABAgQEBAIHCQEAAAAAAAABAgMREgQFACETBjEiFAdBFVFhkSMzNAhxgaEyQlJigiQWEQABAwEFBQYHAQAAAAAAAAABABECAyExQVEE8GFxoRKBkTJCExTB0fGSwjMFFf/aAAwDAQACEQMRAD8Aqjc0bcW/cbCw0WhRW1T1LXJBLjiummU2QYxAUcocBjNSQdlmNydNk9mO4e+Kamqtkilcu9IyxLS3QUzbVW6EoVOwonTUpvwCoqA8OOBxh1IhV6fpQqe6tD3hr6TeuwKjYtgve36UUtXTN6FuurtmRLMqnZmYaeVqlSlA+8SOUwwZy9yiuBHEUWKjl6sWFFwYpLS1bbEqso3ymrYYqC/SOr01ttqQfeIUY6oVGEE44/ux1AHb5J0aEmJkDcvaNh9x7VtJumt1Q5cnLa68zVoFM1TvstpaAcni8lQKUnj7DwwU64RkRkVBpHY5q5u0Pro7Y2Ky220XekuKKN4QoatpDS2FjMhLYaglIGYAHswyNfA4FSWhkGchjinu2/WR2luzYcpHX2yUhQbqR07kDw5HADjPvob1cdCT5gj1/VFsBbSnUlRQkymVaVwPCBljDFf6VIXuiD+VVNzFcY7dWMrZNO+uqrnHwNJmoSlbSikmZwOqEEy5HKH245lSBdwwba5aoh7LS/d3pptdwCXqaio2XnE07kzboP8AkbcTkqZQTMqCofxjhUwx+qfiwIEQ7fa+O1yY7ju2jsm2n9tXYVzt/u9YH66rYUlUriBELaRkgSpzJAE+DUgSHDWItWMaUD6hJMss9yB1LRdw2myXAqrqZQfQw/O0zVLUZVHlJcadMOYJinxGWLjVI8QbgkYRhNgDbyKWN01tv80Q/cC7Q3BwnqG4qkdSn9CVkpRGOXrOG4CTZoNeAibbFGW7V/5FUOu0tR+bT0+nmiIxjzw/fDl4QwtP9uHx25p2i/oebHh248cMlM7Wl8uqYeVSyOfKzSzTmGpHPj/X05YFW8XmTeg8Jbo7OOLoa3avnBn1odO9Nqael+XOaTOT0Q+7BKzdPak9U/VbvybktDOt5gfnJZkfD0oxlEJfGeHH8c8UWYXc0hijO5Uemrp9LTmy66EIyJ+BLze3KOOhprgjal+k/kv/2Q==',
		'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABMAAD/4QMtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJBMTI0QzlDQkFEQzExRTc4M0EyOTg2MEMyNTQ0MkVEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJBMTI0QzlCQkFEQzExRTc4M0EyOTg2MEMyNTQ0MkVEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ODQ3QzU4REJBODgxMUU3QUE0RUFBNTIyQ0I4RTFFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3ODQ3QzU4RUJBODgxMUU3QUE0RUFBNTIyQ0I4RTFFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAMCAgICAgMCAgMEAwIDBAUEAwMEBQYFBQUFBQYIBgcGBgcGCAgJCQoJCQgMDAwMDAwNDQ0NDQ8PDw8PDw8PDw8BAwMDBgYGCwgICxENCw0RFA8PDw8UEQ8PDw8PEREPDw8PDw8RDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PD//AABEIABsAKAMBEQACEQEDEQH/xAB/AAABAwUAAAAAAAAAAAAAAAAEAgMJAAEGBwgBAAMBAQEAAAAAAAAAAAAAAAECAwQABRAAAQIEAwUGBgMAAAAAAAAAAQIDABEEBTESByFBcRMGUWGxIjIUkcHRQjMIcoJEEQADAAIBBQEAAAAAAAAAAAAAAQIRMQMhEiITBBT/2gAMAwEAAhEDEQA/AOYG9R7lSaXXHS1a111lr6qnqqJL6lrNC4ysrV7NKswa5n3ZAJnaZw/sxDkPZ59xI9+nqtO770J031DZ6kN6kJszS76ikedb59PzVtBFYguOodGdOYJIQps4BKTKL5zKZl5M5aOlWTCMEoObAlCNjopxIKTACQCO1CpBGUlREyeIwiDZtN9/rRq91fpdcKm92FsNqCeQ3SuqLrT/ADE/e2qWxJ8w8ZRp+eujT0Q5ePJJBoxrGvVKkqFO2/2VTSNtqLiF523iQEql2HNPZ2RW5SM6TWzaiKhafUJcdnjEApiX7nTNJJefaR/JaR4mAxiBRhboUlKZZhgDPfiYytnpTIX759oAF5ZOaSRmIUe2FQ76BND1Z1Pa5Ltt5rqQS/zVTrcu8hKhDCq2ZJTaxajKPId6nualpT6zWOEKl3zidQaI+l6AarU7qutUVVN4rnFCfrqHT8Dm2wvoG/YzEWPy/XHDdFWZJ2WqPzjH5wVoF7G075Y+bD5zgiDbcvNPGWzGf9Zb+McBClYDjslHHH//2Q==',
	];
}
