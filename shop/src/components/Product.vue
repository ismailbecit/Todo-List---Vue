<template>
  <b-container class="mt-5">
    <b-row>
      <b-col md="3" class="card m-3" v-for="item in products" :key="item.id">
        <b-card
          :title="item.title"
          :img-src="item.img"
          header="Card Header"
          header-text-variant="white"
          header-tag="header"
          header-bg-variant="dark"
          footer="Card Footer"
          footer-tag="footer"
          footer-bg-variant="success"
          footer-border-variant="dark"
        >
          <b-card-text>Header and footers variants.</b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: Date.now(),
          title: "Ayakkabı",
          img: "https://modayitikla.com/17938/yuksek-taban-tasarim-kadin-spor-ayakkabi.jpg",
          count: 20,
          price: 120,
        },
        {
          id: Date.now(),
          title: "Gömlek",
          img: "https://www.fcplus.com/Uploads/UrunResimleri/2976-yaka-filketeli-zincirli-gomlek-be73-c.jpg",
          count: 250,
          price: 20,
        },
      ],
    };
  },
};
</script>

<style>
.card-img {
  width: 100% !important;
  height: 250px !important;
}
</style>
