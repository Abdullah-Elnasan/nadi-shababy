<template>
    <div class="container readBook bg-white" id="books">
        <div class="row">

            <h3 class="pt-3">كتبنا</h3>

            <p class="fw-light pb-4 pt-4">هذه بعض الكتب التي قرأناها في نادينا الشبابي</p>
            <hooper class="hooper3" :infiniteScroll="true" :settings="hooperSettings" :autoPlay="true">
                <slide class="" v-for="book in books" :key="book.id">
                    <div class="pageBook">
                        <span dir="rtl" class="numPage"> عدد الصفحات: {{ book.pageNumber }}</span>
                        <span dir="rtl" class="author"> المؤلف: {{ book.author }}</span>
                        <img :src="book.img" alt="">
                        <h5 class="fw-normal fs-7 pt-3">{{ book.name }}</h5>
                        <p class="text-center" dir="rtl">{{ book.description | shorten(100, '   ... اقرأ المزيد') }} </p>
                        <button type="button" class="btn btn-success" dir="rtl">اعرف المزيد ..</button>

                    </div>
                </slide>

                <hooper-navigation slot="hooper-addons"></hooper-navigation>
            </hooper>
        </div>
        <div class="row pt-5 mt-5">
            <p class="fw-light pb-4 pt-5 mt-3">هذه بعض الكتب التي صورناها في نادينا الشبابي وهي غير متوفرة عبر الإنترنت</p>
            <hooper class="hooper3 hooper4" :infiniteScroll="true" :settings="hooperSettings" :autoPlay="true">
                <slide class="" v-for="book in booksScan" :key="book.id">
                    <div class="pageBook">
                        <span dir="rtl" class="numPage"> عدد الصفحات: {{ book.pageNumber }}</span>
                        <span dir="rtl" class="author"> المؤلف: {{ book.author }}</span>
                        <img :src="book.img" alt="">
                        <h5 class="fw-normal fs-7 pt-3">{{ book.name }}</h5>
                        <button type="button" class="btn btn-success mt-2" dir="rtl"> <a :href="book.link">اعرف المزيد
                                ..</a></button>

                    </div>
                </slide>

                <hooper-navigation slot="hooper-addons"></hooper-navigation>
            </hooper>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

// import theBooks from '../../public/json/theBooks.json'

import hioar from '../img/hioar.jpg'
import hekma from '../img/hekma.jpg'
import shabmuslim from '../img/shabmuslim.jpg'
import mostalahat from '../img/mostalahat.jpg'
import ensan from '../img/ensan.jpeg'
import eslam from '../img/eslam.jpg'
import koran from '../img/koran.jpeg'
import language from '../img/language.jpg'
import fekr from '../img/fekr.jpeg'


import {
    Hooper,
    Slide,
    Progress as HooperProgress,
    Pagination as HooperPagination,
    Navigation as HooperNavigation
} from 'hooper';

import 'hooper/dist/hooper.css';

export default {

    components: {
        Hooper,
        Slide,
        HooperProgress,
        HooperPagination,
        HooperNavigation,

    },

    name: 'readBook',
    data() {
        return {
            infos: null,
            books:
                [
                    {
                        "id": 1,
                        "author": "ألكسيس كارل",
                        "name": "الإنسان ذلك المجهول",
                        "img": ensan,
                        "pageNumber": "325",
                        "description": "يقدم هذا الكتاب قراءة معرفية للإنسان من وجهة نظر علمية وليست فلسفية، فالدكتور ألكسيس ماريل ليس فيلسوفا بل رجل علم وحسب، وقد مضى الشطر الأكبر من حياته في المختبر يدرس الكائنات الحية والشطر الباقي في العالم الفسيح يراقب بني الإنسان ويحاول فهمه وتأتي أهمية تجربته في كونها ملخصا للملاحظات والتجارب التي رآها بأم عينه أو نتيجة معرفة مباشرة من أولئك الذين اتصل بهم",
                        "link": "https://www.goodreads.com/ar/book/show/6317068"
                    },
                    {
                        "id": 2,
                        "author": "علي عزت بيجوفيتش",
                        "name": "الإسلام بين الشرق والغرب",
                        "img": eslam,
                        "pageNumber": "417",
                        "description": "ليس كتاب الإسلام بين الشرق والغرب كتابا بسيطا يمكن للقارئ  أن يتناوله مسترخيا، أو يقتحمه في أي موضع فيقرأ صقحة هنا وصفحة هناك ثم يظن أنه قد فهم شيئا أو أنه قادر على تقييمه أو تصنيفه بين الأنماط الفكرية المختلفة. إنما القارئ الجاد أن يحشد له ويتهيأ للدخول لا في عالم كتاب ثري بأفكاره متميز بمنهجه أخاذ بأسلوبه وقوة منطقه وثقافة صاحبه العميقة الواسعة، فمؤلف الكتاب مسلم حتى النخاع وأوروبي المولد والنشأة والتعليم",
                        "link": "https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-0132-%D8%A7%D9%84%D8%A7%D8%B3%D9%84%D8%A7%D9%85-%D8%A8%D9%8A%D9%86-%D8%A7%D9%84%D8%B4%D8%B1%D9%82-%D9%88-%D8%A7%D9%84%D8%BA%D8%B1%D8%A8-Z-%D9%83%D8%AA%D8%A7%D8%A8-pdf"
                    },
                    {
                        "id": 3,
                        "author": "نديم الجسر",
                        "name": " قصة الإيمان ",
                        "img": koran,
                        "pageNumber": "475",
                        "description": "يقدم هذا الكتاب قراءة معرفية للإنسان من وجهة نظر علمية وليست فلسفية، فالدكتور ألكسيس ماريل ليس فيلسوفا بل رجل علم وحسب، وقد مضى الشطر الأكبر من حياته في المختبر يدرس الكائنات الحية والشطر الباقي في العالم الفسيح يراقب بني الإنسان ويحاول فهمه وتأتي أهمية تجربته في كونها ملخصا للملاحظات والتجارب التي رآها بأم عينه أو نتيجة معرفة مباشرة من أولئك الذين اتصل بهم",
                        "link": "https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D9%82%D8%B5%D8%A9-%D8%A7%D9%84%D8%A5%D9%8A%D9%85%D8%A7%D9%86-%D8%A8%D9%8A%D9%86-%D8%A7%D9%84%D9%81%D9%84%D8%B3%D9%81%D8%A9-%D9%88%D8%A7%D9%84%D8%B9%D9%84%D9%85-%D9%88%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86-pdf"
                    },
                    {
                        "id": 4,
                        "author": "المسيري",
                        "name": " اللغة والمجاز",
                        "img": language,
                        "pageNumber": "244",
                        "description": " بدأ يدخل كتاب اللغة والمجاز بين التوحيد ووحدة الوجود في بؤرة اهتمام الباحثين والمختصين المهتمين بعلوم العقائد، حيث يندرج هذا الكتاب ذمن مؤلفات فروع علوم العقيدة والتخصصات وضيقة الصلة من حديثر وفقه وغيرها من العلوم الشرعية",
                        "link": "https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D8%A7%D9%84%D9%84%D8%BA%D8%A9-%D9%88%D8%A7%D9%84%D9%85%D8%AC%D8%A7%D8%B2-%D8%A8%D9%8A%D9%86-%D8%A7%D9%84%D8%AA%D9%88%D8%AD%D9%8A%D8%AF-%D9%88%D9%88%D8%AD%D8%AF%D8%A9-%D8%A7%D9%84%D9%88%D8%AC%D9%88%D8%AF-pdf"
                    },
                    {
                        "id": 5,
                        "author": "عدنان محمد زرزور",
                        "name": " جذور الفكر القومي والعلماني ",
                        "img": fekr,
                        "pageNumber": "211",
                        "description": "يقدم هذا الكتاب قراءة معرفية للإنسان من وجهة نظر علمية وليست فلسفية، فالدكتور ألكسيس ماريل ليس فيلسوفا بل رجل علم وحسب، وقد مضى الشطر الأكبر من حياته في المختبر يدرس الكائنات الحية والشطر الباقي في العالم الفسيح يراقب بني الإنسان ويحاول فهمه وتأتي أهمية تجربته في كونها ملخصا للملاحظات والتجارب التي رآها بأم عينه أو نتيجة معرفة مباشرة من أولئك الذين اتصل بهم",
                        "link": "https://www.noor-book.com/%D9%83%D8%AA%D8%A7%D8%A8-%D8%AC%D8%B0%D9%88%D8%B1-%D8%A7%D9%84%D9%81%D9%83%D8%B1-%D8%A7%D9%84%D9%82%D9%88%D9%85%D9%8A-%D9%88%D8%A7%D9%84%D8%B9%D9%84%D9%85%D8%A7%D9%86%D9%8A-pdf"
                    }
                ]
            ,
            booksScan: [
                {
                    "id": 1,
                    "author": "عبدالله العقيل",
                    "name": "أدب الحوار والمجادلة",
                    "img": hioar,
                    "pageNumber": "73",
                    "description": "يقدم هذا الكتاب قراءة معرفية للإنسان من وجهة نظر علمية وليست فلسفية، فالدكتور ألكسيس ماريل ليس فيلسوفا بل رجل علم وحسب، وقد مضى الشطر الأكبر من حياته في المختبر يدرس الكائنات الحية والشطر الباقي في العالم الفسيح يراقب بني الإنسان ويحاول فهمه وتأتي أهمية تجربته في كونها ملخصا للملاحظات والتجارب التي رآها بأم عينه أو نتيجة معرفة مباشرة من أولئك الذين اتصل بهم",
                    "link": "https://t.me/book_alnadi/486"
                },
                {
                    "id": 1,
                    "author": "عبدالحميد كشك",
                    "name": "ينابيع الحكمة",
                    "img": hekma,
                    "pageNumber": "57",
                    "description": "يقدم هذا الكتاب قراءة معرفية للإنسان من وجهة نظر علمية وليست فلسفية، فالدكتور ألكسيس ماريل ليس فيلسوفا بل رجل علم وحسب، وقد مضى الشطر الأكبر من حياته في المختبر يدرس الكائنات الحية والشطر الباقي في العالم الفسيح يراقب بني الإنسان ويحاول فهمه وتأتي أهمية تجربته في كونها ملخصا للملاحظات والتجارب التي رآها بأم عينه أو نتيجة معرفة مباشرة من أولئك الذين اتصل بهم",
                    "link": "https://t.me/book_alnadi/487"
                },
                {
                    "id": 1,
                    "author": "علي الطنطاوي",
                    "name": " المثل الأعلى للشباب المسلم ",
                    "img": shabmuslim,
                    "pageNumber": "53",
                    "description": "يقدم هذا الكتاب قراءة معرفية للإنسان من وجهة نظر علمية وليست فلسفية، فالدكتور ألكسيس ماريل ليس فيلسوفا بل رجل علم وحسب، وقد مضى الشطر الأكبر من حياته في المختبر يدرس الكائنات الحية والشطر الباقي في العالم الفسيح يراقب بني الإنسان ويحاول فهمه وتأتي أهمية تجربته في كونها ملخصا للملاحظات والتجارب التي رآها بأم عينه أو نتيجة معرفة مباشرة من أولئك الذين اتصل بهم",
                    "link": "https://t.me/book_alnadi/470"
                },
                {
                    "id": 1,
                    "author": " محمد عمارة",
                    "name": " في فقه المصطلحات ",
                    "img": mostalahat,
                    "pageNumber": "98",
                    "description": "يقدم هذا الكتاب قراءة معرفية للإنسان من وجهة نظر علمية وليست فلسفية، فالدكتور ألكسيس ماريل ليس فيلسوفا بل رجل علم وحسب، وقد مضى الشطر الأكبر من حياته في المختبر يدرس الكائنات الحية والشطر الباقي في العالم الفسيح يراقب بني الإنسان ويحاول فهمه وتأتي أهمية تجربته في كونها ملخصا للملاحظات والتجارب التي رآها بأم عينه أو نتيجة معرفة مباشرة من أولئك الذين اتصل بهم",
                    "link": "https://t.me/book_alnadi/483"
                }
            ],
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
                    767: {
                        itemsToShow: '1'
                    },
                    768: {
                        itemsToShow: '2'
                    },
                    991: {
                        itemsToShow: '2'
                    },
                    992: {
                        itemsToShow: '3'
                    },
                    1400: {
                        itemsToShow: '3'
                    }
                }

            }
        }
    },

    computed: {
        coputedHei() {
            return this.height
        }
    },
    filters: {
        shorten: function (value, textLength, suffix) {
            return value.substring(0, textLength) + suffix;
        }
    },


}
</script>
<style lang="scss">
.readBook {
    position: relative;
    height: 1357.5px;

    h3 {
        color: #009688;
    }


    .hooper3 {
        padding: 0px !important;
    }

    .pageBook {
        margin-right: 10px;
        position: relative;
        padding: 20px;
        box-shadow: 0px 1px 1px 1px #009688;
        margin-left: 10px;
    }


    .numPage,
    .author {
        font-size: 16px;
        position: absolute;
        top: -4px;

        font-weight: 300;
        font-family: system-ui;
    }

    .numPage {
        left: 2px;
    }

    .author {
        right: 2px;
    }


    h5 {
        font-size: 18px;
        padding-bottom: 10px;
        padding-top: 10px;
        border-bottom: solid #00a19b 2px;
        color: black;
    }

    p {
        font-size: 16px;
        font-family: system-ui;
        padding: 20px;
        padding-top: 10px;
        margin-right: 15px;
        color: #777777;

    }
}


.hooper3 .hooper-list {

    height: 176.5%;
}

.hooper4 .hooper-list {

    height: 146.5% !important;
}

.hooper3:last-child img {
    margin-top: 20px !important;
}


.hooper3:last-child img {
    width: 260px !important;
    height: 260px !important;
    opacity: 1 !important;
}

.hooper3 .hooper-next,
.hooper-prev {
    top: 65% !important;

    font-size: 20px;
}

.hooper3 .icon {
    background-color: #00a19b !important;
    color: white !important;
}

.hooper3 .icon:hover {
    background-color: white !important;
    border: solid 3px #00a19b;
}


.is-current img {
    opacity: 1 !important;
}


.hooper3 .btn-success {
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


@media (max-width: 1399.98px) {
    .hooper:last-child img {
        margin-top: 24%;

    }

}

@media (max-width: 1199.98px) {

    .readBook {
        height: 1377px;
    }

    .hooper-navigation,
    .hooper-pagination {
        display: none;

    }

    .hooper3 .hooper-list {
        height: 191.5%;
    }

    .readBook .row:last-child {
        padding-top: 4rem !important;
    }

    .readBook p {
        padding: 0 0 0 0;
    }
}

@media (max-width: 767.98px) {

    .hooper:last-child img {
        margin-top: 17%;

    }

    .hooper:first-child {
        top: 188px;
    }
}

@media (max-width: 575.98px) {
    .hooper:first-child {
        top: 170px;
    }

}
</style>