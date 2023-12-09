<template >
    <div class="headerApp">
        <section>
            <div class="navigation fixed-top container" :class="{ 'onScroll': !topOfPage }">
                <div class="logo" v-show="topOfPage">
                    <img src="../assets/nadi.jpg" alt="">
                </div>
                <div class="logo" v-show="!topOfPage">
                    <img :src='img' alt="">
                </div>
                <nav :class="[respon === false ? 'noRespon' : 'respon']">



                    <ul class="nav-list">
                        <li><a href="#books" @click="activeNum = '3'" :class="[activeNum === '3' ? 'active' : '']"><span>
                                    كتبنا</span> <font-awesome-icon icon="fa-solid fa-book" /></a></li>

                        <li><a href="#history" @click="activeNum = '4'" :class="[activeNum === '4' ? 'active' : '']"><span>
                                    إنجازاتنا</span> <font-awesome-icon class="list-icon"
                                    icon="fa-solid fa-list-check" /></a></li>

                        <li><a href="#About" @click="activeNum = '2'" :class="[activeNum === '2' ? 'active' : '']"><span>من
                                    نحن؟</span> <font-awesome-icon class="card-icon" icon="fa-solid fa-address-card" /></a>
                        </li>
                        <li><a href="#slider" @click="activeNum = '1'" :class="[activeNum === '1' ? 'active' : '']">
                                <span>الصفحة الرئيسية</span> <font-awesome-icon class="house-icon"
                                    icon="fa-solid fa-house" /></a></li>

                    </ul>


                    <div class="icon float-end pt-3 d-lg-none " @click="isAeactive = !isAeactive; respon = !respon"
                        :class="{ change: isAeactive }">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>


                </nav>
            </div>
        </section>


    </div>
</template>

<script>



export default {
    name: 'headerApp',
    data: function () {
        return {
            img: require('../assets/img/8.jpg'),
            isAeactive: false,
            activeNum: '1',
            respon: false,
            noRespon: true,
            topOfPage: true
        }
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            if (window.pageYOffset > 0) {
                if (this.topOfPage) this.topOfPage = false
            } else {
                if (!this.topOfPage) this.topOfPage = true
            }
        }
    },

}

</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cairo&family=Marhey:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;700&family=Poppins:wght@100&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,300&family=Work+Sans:wght@300;400;500;600;700;800&display=swap');

:root {
    --content-width: 1000px;
    --breakpoint: 799px;
    --nav-hieght: 70px;
    --background-color: #00a19b;
    --fontM-color: #00a19b;
    --font-color: #ffffff;
    --link-hover-color: #2581dc
}

* {
    font-family: 'Marhey', sans-serif;
    font-size: 26px;
    font-weight: 400;
}


.navigation {
    width: 100%;
    transition: top 0.3s;
    padding: 30px;
    background-color: #ffffff;
    box-shadow: 0 0 8px #f6e8e8;

    &.onScroll {
        box-shadow: 0 0 20px #aaa;
        background-color: white;

        ul li a {
            color: black;
        }

        ul li .active {
            color: #00a19b;
        }

        .bar1,
        .bar2,
        .bar3 {
            background-color: black;
        }

        .respon ul {
            transform: translateY(94px);
        }
    }
}


.logo {
    position: relative;
    padding-left: 20px;
    float: left;
}

.logo img {
    position: absolute;
    width: 100px;
    height: 100px;
    display: block;
    padding-top: -0px;


}

nav {
    float: right;
    padding: 0 !important;



    ul {
        list-style: none;
        margin: 0;
        padding: 0;



        a,
        a:visited {
            display: block;
            padding: 0 26px;
            line-height: var(--nav-hieght);
            color: #00a19b;
            text-decoration: none;


        }

        a:hover {
            margin-top: -15px;
            transition: all 0.3s;
        }


        li {
            float: left;
            position: relative;
            margin-left: -20px;
            padding-top: 5px;

            span {
                padding-top: 5px;
            }

            .card-icon {
                padding-bottom: 0px;
            }

            .house-icon {
                padding-bottom: 2px;
            }

            .active {
                color: black;
            }
        }
    }


}

.icon {
    text-align: -webkit-right;
}

.icon:hover {
    .bar2 {
        width: 35px;
    }
}

.bar1,
.bar3 {
    width: 35px;
    height: 5px;
    background-color: #00a19b;
    margin: 6px 0;
    transition: 0.4s;
    border-radius: 4px;
}

.bar2 {
    right: 0;
    width: 25px;
    height: 5px;
    background-color: #00a19b;
    margin: 6px 0;
    transition: 0.4s;
    border-radius: 4px;
}

.change .bar1 {
    transform: translate(0, 11px) rotate(-45deg);
}

.change .bar2 {
    opacity: 0;
}

.change .bar3 {
    transform: translate(0, -11px) rotate(45deg);
}



@media only screen and (max-width: 993px) {

    .noRespon {
        ul {
            display: none;
        }
    }
}

@media only screen and (max-width: 993px) {

    .navigation .logo img {
        padding-top: 0px;
        height: 85px;
    }

    @keyframes menuTran {
        0% {
            transform: translateY(50px);
        }

        100% {
            transform: translateY(94px);
        }
    }

    .respon {
        ul {
            background-color: white;
            width: 100%;
            position: absolute;
            left: 0px;
            /** top: 110px; */
            transform: translateY(94px);
            animation-name: menuTran;
            animation-duration: 0.8s;
            animation-timing-function: ease;
            padding-bottom: 20px;

            li {
                float: none;
                margin-bottom: -15px;

                a {
                    padding: 26px;
                    line-height: 5px;
                }

                a:before {
                    position: absolute;
                    width: 2px;
                    height: 100%;
                    right: 30%;
                    top: 0px;
                    content: '';
                    background: hsl(0, 0%, 4%);
                    opacity: 0;
                    transition: all 0.3s;
                }

                a:hover {
                    margin-top: 0px;
                }

                a:hover:before {
                    width: 40%;
                    opacity: 0.3;
                }

                ul li a {
                    padding-left: 30px;

                }
            }
        }
    }
}
</style>