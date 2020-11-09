/****************************
 * SLIDER WITH VUE
 ***************************/

 const slider = new Vue ({

    el: '#slider',

    data: {
        indexPhotos: 0,
        photos: [
            './img/image1.jpg',
            './img/image2.jpg',
            './img/image3.jpg',
            './img/image4.jpg',
        ],
        intervalId: 0,
    },

    created() {
        this.startSlider()
    },

    methods: {
        next(){
            this.indexPhotos ++;

            if ( this.indexPhotos > ( this.photos.length - 1 ) ) {
                this.indexPhotos = 0;
            };
        },
        prev(){
            this.indexPhotos --;

            if ( this.indexPhotos < 0 ) {
                this.indexPhotos = this.photos.length - 1;
            };
        },
        navCircle( index ) {
            this.indexPhotos = index;
        },
        startSlider() {
            this.intervalId = setInterval(() => {
                this.next()
            }, 5000);
        },
        stopSlider() {
            clearInterval(this.intervalId);
        }
        
    },

 });