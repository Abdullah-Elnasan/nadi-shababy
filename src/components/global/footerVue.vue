<template>
    <div class="container mt-1" :class="[isActive === true ? 'footer2' : 'footer']">
        <div class="row" v-if="!isActive">
            <div class="col-lg-4 col-md-12 c0l-xs-12">
                <div class="footer-block footer-breif-info ">
                    <div class="footer-logo ">
                        <img :src="backImg" alt="">
                    </div>
                    <p dir="rtl">{{ message }}</p>
                </div>
                <div>
                    <span>
                        <a
                            href="https://www.facebook.com/search/top?q=%D8%A7%D9%84%D9%86%D8%A7%D8%AF%D9%8A%20%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8%D9%8A">
                            <font-awesome-icon icon="fa-brands fa-facebook" /></a>
                        <a href="https://web.telegram.org/a/#-1001391649153"> <font-awesome-icon
                                icon="fa-brands fa-telegram" /></a>
                        <a href="https://www.youtube.com/@user-jn2vx3ow3m"> <font-awesome-icon
                                icon="fa-brands fa-youtube" /></a>
                    </span>
                </div>
            </div>
            <div class="col-lg-4 col-md-12 col-xs-12">
                <div class="footer-block footer-address">
                    <h2 class="text-end">عناوين</h2>
                    <div class="row">
                        <div>
                            <ul class="text-end">
                                <li class="text-end" dir="rtl"> <font-awesome-icon icon="fa-solid fa-location-dot" /> <span>
                                        يقع مركزنا في مدينة الباب - حلب - سوريا، قرب مسجد الفاتح.</span> </li>
                                <li><span> {{ Time }}</span> <font-awesome-icon class="svg-icon"
                                        icon="fa-solid fa-calendar-days" /> </li>
                                <li><span> {{ numberPhoneCenter }} : رقم هاتف المركز</span> <font-awesome-icon
                                        class="svg-icon" icon="fa-solid fa-phone" /></li>
                                <li><span> {{ emailCenter }} : إيميل المركز</span> <font-awesome-icon class="svg-icon"
                                        icon="fa-solid fa-envelope" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-12 col-xs-12">
                <div class="footer-block quick-link">
                    <h2 class="text-end">الوصول السريع</h2>
                    <div class="row">
                        <div class="col-12">
                            <ul class="nav-list text-end">
                                <li><a href="#slider"> <span>الصفحة الرئيسية</span> <font-awesome-icon class="house-icon"
                                            icon="fa-solid fa-house" /></a></li>
                                <li><a href="#About"><span>من نحن؟</span> <font-awesome-icon class="card-icon"
                                            icon="fa-solid fa-address-card" /></a></li>
                                <li><a href="#history"><span> إنجازاتنا</span> <font-awesome-icon class="list-icon"
                                            icon="fa-solid fa-list-check" /></a></li>
                                <li><a href="#books"><span> كتبنا</span> <font-awesome-icon icon="fa-solid fa-book" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" v-if="isActive">
            <div class="footer-logo col-6">
                <img :src="backImg" alt="">
            </div>
            <div>
                <span>
                    <a
                        href="https://www.facebook.com/search/top?q=%D8%A7%D9%84%D9%86%D8%A7%D8%AF%D9%8A%20%D8%A7%D9%84%D8%B4%D8%A8%D8%A7%D8%A8%D9%8A">
                        <font-awesome-icon icon="fa-brands fa-facebook" /></a>
                    <a href="https://web.telegram.org/a/#-1001391649153"> <font-awesome-icon
                            icon="fa-brands fa-telegram" /></a>
                    <a href="https://www.youtube.com/@user-jn2vx3ow3m"> <font-awesome-icon
                            icon="fa-brands fa-youtube" /></a>
                </span>
            </div>
            <div>
                <ul>
                    <li><span> {{ numberPhoneCenter }} : رقم الهاتف </span> <span><font-awesome-icon class="svg-icon"
                                icon="fa-solid fa-phone" /></span></li>
                    <li><span> {{ emailCenter }} : الإيميل </span> <span><font-awesome-icon class="svg-icon"
                                icon="fa-solid fa-envelope" /></span></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'footerVue',
    data: () => {
        return {
            isActive: false,
            Time: 'المركز متوفر من الساعة التاسعة صباحا حتى منتصف الليل',
            numberPhoneCenter: '+0552 551 08 95',
            emailCenter: 'alnadi2014@gmail.com',
            backImg: require('../../assets/img/nadi2Empty.png'),
            message: 'مركزنا تعليمي، يحتوي مكتبة تتضمن مئات الكتب، وهي متاحة للقراءة فيها دائما، تأسس مركزنا في عام 2014 في حي الوعر في /حمص-سورية/، ونتيجة التهجير القسري انتقل إلى مدينة الباب في الشمال السوري عام 2017.. '
        }
    },
    beforeMount() {
        window.addEventListener('resize', this.handleScroll)
    },
    methods: {
        handleScroll() {
            if (window.innerWidth > 767.98) {
                this.isActive = false
            } else {
                this.isActive = true
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.footer {
    position: relative;
    background-color: #001d1f;
    padding: 65px 15px 70px;
}

.footer2 {
    position: relative;
    background-color: #001d1f;
    padding: 40px 15px 40px;
}

.footer2 ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: calc(4.5% + 4px);
}

.footer2 ul li {
    display: inline-flex;
    position: relative;
    text-decoration: none;
    color: #f2f2f2;
}




.footer-block {
    color: #f2f2f2;
    font-size: 12px !important;
}


.footer-breif-info .footer-logo {
    max-width: 174px;
    margin-bottom: 20px;
}

.footer-breif-info .footer-logo img {
    margin-left: 65%;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.footer-logo img {
    margin-left: 59%;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.footer-block p {
    padding: 10px;
    margin-bottom: 28px;
    line-height: 22px;
    margin-top: -46px;
    font-size: 12px !important;
}

div span {
    margin-top: 40px;
    margin-left: 25px;
}

.footer-address ul li {
    line-height: 50px;
    position: relative;
}


.footer-address ul li span {
    position: absolute;
    right: 40px;
    bottom: 5%;
}

.footer-address ul li:first-child span {
    right: 30px !important;
}


div span a {
    color: #f2f2f2;
    text-decoration: none;
    margin-right: 22px;
}

div span a:hover {
    color: #0bc1cc;
}

.quick-link,
.footer-address {
    margin-top: 15%;
}

.quick-link h2,
.footer-address h2 {
    position: relative;
    font-size: 24px;
    padding-bottom: 12px;
    margin-bottom: 22px;
    position: relative;
}

.quick-link h2:before,
.footer-address h2::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    height: 3px;
    width: 60px;
    background-color: #0bc1cc;
}

.footer-address h2::before {
    width: 40px;
}

.quick-link ul,
.footer-address ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: calc(4.5% + 4px);
}

.quick-link ul li {
    line-height: 50px;
    position: relative;
}



.quick-link ul li a {
    text-decoration: none;
    color: #f2f2f2;
}

.quick-link ul li:hover {
    transform: translateX(-20px);
    transition: all .5s;

    a {
        color: #0bc1cc;
    }
}


.footer-address ul li span {

    font-size: 12px !important;
}

@media (max-width: 1199.98px) {

    .footer-address ul {
        margin-top: 6.5%;
    }

    .footer-address ul li {
        margin-left: -60px;

    }

    .footer-breif-info .footer-logo {
        margin-bottom: 6px;
        margin-top: -6px;
    }

    .footer-breif-info .footer-logo img {
        margin-left: 34%;

    }

    .footer-breif-info p {
        margin-bottom: 14px;
        line-height: 22px;
        padding: 20px;
        margin-top: -60px;
    }


}

@media (max-width: 991.98px) {
    .footer-breif-info .footer-logo img {
        margin-left: 145%;
    }

    .footer-address,
    .quick-link {
        margin-top: 10%;
        margin-right: 29%;
    }

    .footer-address h2 {
        margin-right: 23%;
    }

    .footer-address h2:before {
        width: 18%;
    }

    .quick-link h2 {
        margin-right: 20%;
    }

    .quick-link h2:before {
        width: 38%;
    }

    div span {
        font-size: 20px;
    }
}

@media (max-width: 767.98px) {
    .footer-breif-info .footer-logo img {
        margin-left: 90%;
    }

    .footer-address h2:before {
        width: 24%;
    }

    .quick-link h2 {
        margin-right: 10%;
    }

    .quick-link h2:before {
        width: 48%;
    }



    div span {
        font-size: 18px;
    }
}
</style>