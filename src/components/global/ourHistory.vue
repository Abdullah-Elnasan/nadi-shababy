<template>
    <div class="container" id="history">
        <div class="row ourHistory d-flex justify-content-start " :style="{ 'backgroundImage': `url(${backImage})` }">
            <div class="col-md-3 col-sm-6 funfact" v-for="work in works" :key="work.id">
                <div class="text-center pt-5 pb-3 ">
                    <font-awesome-icon :icon="work.icon" class="fs-2" />
                    <h2>+{{ work.number }}</h2>
                    <p class="pb-4">{{ work.title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { h } from 'vue';


export default {
    name: 'ourHistory',
    data: () => {
        return {
            backImage: require('../../assets/img/4.jpeg'),
            zero: 0,
            num: null,
            works: [{ title: 'كتب مقروءة', number: 246, icon: 'fa-solid fa-book-open', }, {
                title: 'كتب مصورة', number: 500, icon: 'fa-solid fa-print'
            },
            {
                title: 'أفلام وثائقية', number: 95, icon: 'fa-solid fa-film'
            },
            {
                title: 'أنشطة طلابية متنوعة', number: 115, icon: 'fa-solid fa-user-graduate'
            }]
        };
    },
    methods: {
        numPlus() {
            while (this.works.number < 20) {
                this.works.number[0]++;
            }
        }
    },
    components: { h }
}

</script>

<style scoped lang="scss">
.ourHistory {
    position: relative;
    background-position: 50% 88px;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: repeat-y;
    box-sizing: border-box;
    display: block;
    position: relative;
    overflow: hidden;

}

.ourHistory::before {
    background-color: rgba(9, 152, 160, 0.9) !important;
    background: rgba(17, 17, 17, 0.5) none repeat scroll 0 0;
    content: " ";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
}

.ourHistory .funfact {
    color: aliceblue;
    z-index: 1;
    position: relative;

    h2 {
        line-height: 3;
    }
}

.funfact::before {
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    color: #fff;
    background-color: #fff;
    right: 1%;
    top: 0;
    transition: all 1s;
    transform: translateY(+100%)
}

.funfact::after {
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    color: #fff;
    background-color: #fff;
    right: 99%;
    top: 0;
    transition: all 1s;
    transform: translateY(-100%)
}


.funfact:hover::before,
.funfact:hover::after {
    transform: translateY(0%)
}

.btn-success {
    z-index: 1;
    --bs-btn-color: #fff;
    --bs-btn-bg: #00a19b;
    --bs-btn-border-color: #ffffff;
    --bs-btn-hover-color: #00a19b;
    --bs-btn-hover-bg: #ffffff;
    --bs-btn-hover-border-color: #00a19b;
    --bs-btn-focus-shadow-rgb: 60, 153, 110;
}

@media (max-width: 991.98px) {

    .funfact {
        padding-left: 0 !important;
    }

    .funfact div {
        padding-bottom: 0 !important;

        h2 {
            margin-bottom: 0 !important;
            line-height: 2 !important;
        }
    }
}

@media (max-width: 767.98px) {
    .funfact div {
        padding-top: 2rem !important;
    }

}</style>
