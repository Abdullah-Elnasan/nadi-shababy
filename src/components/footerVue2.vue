<template>
    <div class="container">
        <div class="row">
            <div class="copyright-wrap">
                <p v-if="!isActive">Copyright © 2023 Alnadi Alshababy All Rights Reserved. Developed by <a
                        href="https://www.facebook.com/profile.php?id=100056088190911">{{ myName }}</a> </p>
                <p v-if="isActive">Copyright © 2023 All Rights Reserved. Developed by <a
                        href="https://www.facebook.com/profile.php?id=100056088190911">{{ myName }}</a> </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'footerVue2',
    data: () => {
        return {
            myName: 'Abdullah Alnaasan',
            isActive: false
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
    }
}
</script>


<style scoped>
.copyright-wrap {

    background-color: #000d0e;
    color: #8c8c8c;
    text-align: center;
    padding: 20px 15px;
}

.copyright-wrap p {
    margin-bottom: 0;
    font-size: 12px;
}

.copyright-wrap p a {
    text-decoration: none;
    color: #0bc1cc;
    font-size: 12px;
}
</style>