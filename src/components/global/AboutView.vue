<template>
    <div class="about container bg-white" id="About">

        <div class="row backAb p-3" v-show="!isActive">
            <div class="col-md-6 d-flex justify-content-start pt-5">
                <img :src="backImg" class="img-fluid" alt="">
            </div>

            <div class="col-md-6 text-end lh-lg">
                <h3 class="p-3 fw-bold text-end">{{ titleAbout }}</h3>
                <p class="pt-4">{{ contentAbout }}<span>|</span></p>
                <button type="button" class="btn btn-success mt-2" dir="rtl"> <a
                        href="https://drive.google.com/file/d/12ga5hEcrO1RGV0dR1i9B_-XcqZiJidpo/view?usp=sharing">اعرف
                        المزيد
                        ..</a></button>
            </div>

        </div>

        <div class="row backAb p-3" v-show="isActive">


            <div class="isRespon1 col-md-6 text-end lh-lg">
                <h3 class="p-3 fw-bold text-end">{{ titleAbout }}</h3>
                <p dir="rtl">{{ contentAbout }}<span>|</span></p>

            </div>

            <div class="isRespon col-md-6 d-flex justify-content-start ">
                <div class=""><img :src="backImg" class="img-fluid" alt=""></div>
                <div>
                    <button type="button" class="btn btn-success mt-2" dir="rtl"> <a
                            href="https://drive.google.com/file/d/12ga5hEcrO1RGV0dR1i9B_-XcqZiJidpo/view?usp=sharing">اعرف
                            المزيد
                            ..</a></button>
                </div>

            </div>

        </div>

    </div>
</template>

<script>

export default {
    name: 'aboutVue',
    data: () => {
        return {
            backImg: require('../../assets/img/nadi2Empty.png'),
            isActive: false,
            width: window.innerWidth,
            titleAbout: 'من نحن؟',
            contentAbout: 'مركز تعليمي ثقافي يحاول محاكاة المراكز الإسلامية في أوروبا قدر المستطاع، يعمل برؤية إسلامية معتدلة تجمع بين التأصيل العلمي والنشاط الحركي',

            aboutInfo: [
                { h3: 'من نحن؟', p: 'مركز تعليمي ثقافي يحاول محاكاة المراكز الإسلامية في أوروبا قدر المستطاع' }],
            aboutgoals: [
                'تحصين عقول الشباب لحمايتهم من الموجات الفكرية المنحرف وحمايتهم من التطرف الديني واللاديني ', 'بناء شخصية متزنة متفهمة للواقع', 'تهيئة الشباب ليكون فاعلا في أمته ومجتمعه', 'زرع ثقافة العمل الجماعي والمؤسساتي', 'الاهتمام بالطلبة الجامعيين من كافة الاختصاصات', 'الحفاظ على الهوية الإسلامية'
            ]
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

<style scoped lang="scss">
.backAb {
    position: relative;
    color: #00a19b;
    box-shadow: 0 0 20px #aaa;
}

.backAb div h3 {
    color: #00a19b;
    position: relative;
}

.backAb div h3:before {
    content: "";
    color: #00a19b;
    display: block;
    position: absolute;
    background-color: #00a19b;
    height: 45px;
    width: 5px;
    right: 0px;
    top: 32px;
}

.backAb div:last-child {
    direction: rtl;
    font-weight: 300;
}





.backAb img {
    width: 60%;
    height: 300px;
    margin-top: -5px;
}

.btn-success {
    margin-top: -20px;
    --bs-btn-color: #fff;
    --bs-btn-bg: #00a19b;
    --bs-btn-border-color: #ffffff;
    --bs-btn-hover-color: #00a19b;
    --bs-btn-hover-bg: #ffffff;
    --bs-btn-hover-border-color: #00a19b;
    --bs-btn-focus-shadow-rgb: 60, 153, 110;

    A {
        text-decoration: none;
        color: #ffffff;
    }
}

.btn-success:hover a {
    color: #00a19b;
}

.isRespon div:last-child {
    position: absolute;
    left: 36%;
    top: 85%;
}

.isRespon div:first-child {
    margin-top: -60px;
    margin-right: 76px;
    margin-bottom: 20px;
}

.isRespon div img {
    width: 100%;
    height: 300px;
    margin-top: 30px;
}

.isRespon div:first-child h3 {
    margin-bottom: -0.5rem !important;
}

.backAb .isRespon1 h3[data-v-1c2f0554]:before {
    width: 0;
    height: 0;

}

.backAb .isRespon1 h3,
.backAb .isRespon1 p {
    text-align: center !important;
}

@media (max-width: 1199.98px) {
    .backAb p {
        padding-top: 0.5rem !important;
    }
}

@media (max-width: 991.98px) {
    .backAb img {
        height: 240px;
        margin-top: 30px;
        width: 75%;
    }

    .backAb p {
        font-size: 18px;
    }

    .btn-success {
        a {
            font-size: 18px;
        }
    }

    .isRespon1 h3,
    p {
        text-align: start !important;
    }

}

@media (max-width: 575.98px) {
    .isRespon div:first-child {
        display: none;

    }

    .isRespon div:last-child {
        position: relative;
        top: 0;
        right: 32%;
    }

}
</style>
