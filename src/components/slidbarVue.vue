<template>
    <div class="container" id="slider">
        <div class="row">
            <div class="backslid" v-if="isActiveEl">
                <div>
                    <hooper group="group1" class="hooper1 hooperRes" :autoPlay="true">
                        <slide v-for="slid in slides" :key="slid.is">
                            <div><img :src="slid.content" alt=""></div>
                        </slide>
                        <hooper-navigation slot="hooper-addons"></hooper-navigation>
                        <hooper-pagination slot="hooper-addons"></hooper-pagination>
                    </hooper>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="backslid" v-if="!isActiveEl">
                <div>
                    <hooper group="group1" class="hooper1">
                        <slide v-for="slid in slides" :key="slid.is">
                            <div><img :src="slid.content" alt=""></div>
                        </slide>
                    </hooper>

                    <hooper group="group1" class="hooper2" :settings="hooperSettings" :autoPlay="true">
                        <slide v-for="slid in slides" :key="slid.is">
                            <div><img :src="slid.content" alt=""></div>
                        </slide>

                        <hooper-navigation slot="hooper-addons"></hooper-navigation>
                        <hooper-pagination slot="hooper-addons"></hooper-pagination>
                        <hooper-progress slot="hooper-addons"></hooper-progress>
                    </hooper>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    Hooper,
    Slide,
    Progress as HooperProgress,
    Pagination as HooperPagination,
    Navigation as HooperNavigation
} from "hooper";

import 'hooper/dist/hooper.css';

import img2 from "../assets/img/5.jpeg"
import img3 from "../assets/img/4.jpeg"
import img4 from "../assets/img/4.jpeg"
import img5 from "../assets/img/5.jpeg"
import img7 from "../assets/img/7.jpeg"



export default {
    name: 'slidBar',
    components: {
        Hooper,
        Slide,
        HooperProgress,
        HooperPagination,
        HooperNavigation
    },
    data() {
        return {
            isActive: true,
            isActiveEl: false,
            hooperSettings: {
                playSpeed: 3000,
                progress: true,
                itemsToShow: '3',
                centerMode: true,
                infiniteScroll: true,
                breakpoints: {
                    0: {
                        itemsToShow: '1'
                    },
                    991: {
                        itemsToShow: '1'
                    },
                    992: {
                        itemsToShow: '3'
                    },
                    1400: {
                        itemsToShow: '3'
                    }
                }
            },

            slides: [
                {
                    title: 'الإنسان ذلك المجهول',
                    content: img2
                },
                {
                    title: 'اللغة والمجاز',
                    content: img7
                },
                {
                    title: 'زيارة الدكتور عماد الدين الرشيد',
                    content: img3
                },
                {
                    title: 'زيارة الدكتور عماد الدين الرشيد',
                    content: img4
                }, {
                    title: 'الإنسان ذلك المجهول',
                    content: img5
                },
                {
                    title: 'اللغة والمجاز',
                    content: img7
                }
            ]
        };
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleScroll)
    },
    methods: {
        handleScroll() {
            if (window.scrollY > 50) {
                this.isActive = false
            } else {
                this.isActive = true
            }
        },
        handleScroll() {
            if (window.innerWidth > 767.98) {
                this.isActiveEl = false
            } else {
                this.isActiveEl = true
            }
        }
    },

};
</script>



<style  lang="scss">
.backslid {
    position: relative;
    background-color: var(--background-color);

}


.hooper {
    height: 319px;
}

.hooper1 .hooper-list {
    overflow: unset !important;
}

.hooper2 .hooper-list {
    margin-top: 90px;
}

.hooper:first-child {
    margin-bottom: 60px;
    top: 175px;
}

.hooper:first-child img {
    width: 80%;
    height: 300px;
    object-fit: contain;
}


.hooper:last-child img {
    width: 186.67px;
    height: 140px;
    opacity: 0.5;
    margin-top: 20%;

}

.hooper-progress {
    top: 24%;
}

.hooper-progress-inner {
    background-color: #2581dc;
}

.is-current img {
    opacity: 1 !important;
}

.hooper-pagination {
    margin-bottom: 55px;
}

@media (max-width: 1399.98px) {
    .hooper:last-child img {
        margin-top: 24%;

    }

}

@media (max-width: 1199.98px) {

    .hooper:last-child img {
        margin-top: 28%;

    }
}

@media (max-width: 991.98px) {

    .hooper1 .hooper-list {
        overflow: hidden !important;
    }

    .hooper:last-child img {
        margin-top: 13%;

    }
}

.hooperRes:first-child {
    top: 45px;
}

.hooperRes:first-child img {
    width: 80%;
    height: 270px;
    margin-top: 14%;
}

.hooperRes .hooper-pagination {
    margin-bottom: 0;
    bottom: -24px;
}

.hooperRes .hooper-next {
    top: 65%;
}

@media (max-width: 575.98px) {

    .hooper-navigation,
    .hooper-pagination {
        display: none;
    }

    .hooperRes:first-child img {
        margin-top: 17%;
        object-fit: scale-down;
    }
}
</style>

