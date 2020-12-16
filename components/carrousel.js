   class Carrousel {
            constructor(op) {
                this.id = op.id;
                this.time = ((op.time) ? op.time : 1500);
                this.imgsLen = op.imgs.length;
                this.arrows = ((op.arrows) ? op.arrows : false);
                this.points = ((op.points) ? op.points : false);
                this.classIn = ((op.classIn) ? op.classIn : 'img-in');
                this.classOut = ((op.classOut) ? op.classOut : 'img-out');
                this.modal = ((op.modal) ? op.modal : false);
                this.moved = false;
                var self = this;

                var c = document.getElementById(this.id);
                if (this.arrows) {
                    var arrow_l = document.createElement("div");
                    var arrow_r = document.createElement("div");
                    arrow_l.classList.add('arrow-l');
                    arrow_r.classList.add('arrow-r');
                    

                    arrow_l.addEventListener("click",
                        function() {
                            clearInterval(self.interval);
                            self.moveReverse();
                            self.start();
                        }, false);

                    arrow_r.addEventListener("click",
                        function() {
                            clearInterval(self.interval);
                            self.move();
                            self.start();
                        }, false);

                    c.appendChild(arrow_l);
                    c.appendChild(arrow_r);

                }

                //Set images
                for (var i = 0; i < this.imgsLen; i++) {
                    var img = document.createElement("div");
                    if (i == 0) {
                        img.classList.add(this.classIn);
                    } else {
                        img.classList.add('hidden');
                    }
                    img.classList.add('image');
                    if (this.modal) img.classList.add('pointer');
                    img.style.backgroundImage = "url('../" + op.imgs[i] + "')";
                    c.appendChild(img);
                }

                //Set modal
                if (this.modal) {
                    var imgB = this.getImages();
                    for (var i = 0; i < imgB.length; i++) {
                        imgB[i].addEventListener("click",
                            function() {
                                console.log(this);
                                var modal = document.createElement("div");
                                modal.id = 'carrouselModal';
                                modal.classList.add('modal-fullscreen');
                                modal.classList.add('alt');
                                modal.classList.add('rel');

                                var imgDiv = document.createElement("div");

                                imgDiv.classList.add('imageModal');



                                imgDiv.style.backgroundImage = this.style.backgroundImage;

                                var btnModal = document.createElement("button");
                                btnModal.classList.add('btn');
                                btnModal.classList.add('float-bc');
                                btnModal.classList.add('font-xl');
                                btnModal.innerHTML = '<h1>X</h1>';
                                //btnModal.addEventListener

                                btnModal.addEventListener("click",
                                    function() {
                                      document.getElementById("carrouselModal").remove();
                                    }, false);
                                modal.appendChild(imgDiv);
                                imgDiv.appendChild(btnModal);
                                document.body.appendChild(modal);
                            }, false);
                    }

                }

                //Set points
                if (this.points) {
                    var points = document.createElement("div");
                    points.classList.add('carrousel-points');
                    for (var i = 0; i < this.imgsLen; i++) {

                        var point = document.createElement("div");
                        point.classList.add('point');
                        point.classList.add('pointer');
                        point.classList.add('marg-xs');
                        point.id = "point_" + i;
                        points.appendChild(point);
                    }
                    c.appendChild(points);
                    //https://stackoverflow.com/questions/36946159/adding-addeventlistener-in-loop-only-works-for-last-button
                    var points_iter = points.children;
                    for (let i = 0; i < points_iter.length; i++) {
                        points_iter[i].addEventListener("click",
                            function() {
                                self.activePoint(self, i)
                            }, false);
                    }
                }
                if (this.points)
                    this.markPoint(0);
            }

            getImages() {
                var c = document.getElementById(this.id).children;
                var imgs = [];
                for (var i = 0; i < c.length; i++) {
                    if (c[i].classList.contains('image')) {
                        imgs.push(c[i]);
                    }
                }
                return imgs;
            }

            markPoint(index) {
                var points = document.getElementById(this.id).getElementsByClassName('carrousel-points')[0].children;

                for (var i = 0; i < points.length; i++) {
                    if (points[i].classList.contains('active')) {
                        points[i].classList.remove('active');
                    }
                    if (i == index) points[i].classList.add('active');
                }

            }

            activePoint(self, activate) {

                var c = self.getImages();
                var active = 0;
                for (var i = 0; i < c.length; i++) {
                    if (c[i].classList.contains(this.classIn)) {
                        c[i].classList.remove(this.classIn);
                        c[i].classList.add(this.classOut);
                        active = i;
                    }
                }
                c[activate].classList.remove(this.classOut);
                if (c[activate].classList.contains('hidden')) {
                    c[activate].classList.remove('hidden');
                }
                c[activate].classList.add(this.classIn);
                if (this.points)
                    self.markPoint(activate);
                clearInterval(this.interval);
                this.start();
            }

            moveReverse() {

                var c = this.getImages();
                var active = 0;
                for (var i = 0; i < c.length; i++) {
                    if (c[i].classList.contains(this.classIn)) {
                        c[i].classList.remove(this.classIn);
                        c[i].classList.add(this.classOut);
                        active = i;
                    }
                }
                active -= 1;
                if (active < 0) {
                    active = (c.length - 1);
                }
                c[active].classList.remove(this.classOut);
                if (c[active].classList.contains('hidden')) {
                    c[active].classList.remove('hidden');
                }
                c[active].classList.add(this.classIn);
                if (this.points)
                    this.markPoint(active);
            }

            move() {

                var c = this.getImages();
                var active = 0;
                for (var i = 0; i < c.length; i++) {
                    if (c[i].classList.contains(this.classIn)) {
                        c[i].classList.remove(this.classIn);
                        c[i].classList.add(this.classOut);
                        active = i;
                    }
                }
                active += 1;
                if (active == c.length) {
                    active = 0;
                }
                c[active].classList.remove(this.classOut);
                if (c[active].classList.contains('hidden')) {
                    c[active].classList.remove('hidden');
                }
                c[active].classList.add(this.classIn);
                if (this.points)
                    this.markPoint(active);
            }


            start() {
                var self = this;
                this.interval = setInterval(function() {
                    self.move();
                }, this.time);
            }

        }

