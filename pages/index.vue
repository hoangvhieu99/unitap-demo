<template>
<div id="app">
  <Navigation/>
  <HeroBanner />
  <Provide />
  <Future />
  <Using/>
  <OrderSlide/>
  <SocialSlide/>
  <RegisterSlide/>
  <FooterSlide/>
</div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import HeroBanner from '../components/HeroBanner.vue'
import Provide from '../components/Provide.vue'
import Future from '../components/Future.vue'
import Using from '../components/Using.vue'
import OrderSlide from '../components/OrderSlide.vue'
import SocialSlide from '../components/SocialSlide.vue'
import RegisterSlide from '../components/RegisterSlide.vue'
import FooterSlide from '../components/FooterSlide.vue'
export default {
  name: 'app',
  components:{
    Navigation,
    HeroBanner ,
    Provide ,
    Future ,
    Using,
    OrderSlide,
    SocialSlide,
    RegisterSlide,
    FooterSlide,
  },

}
</script>
