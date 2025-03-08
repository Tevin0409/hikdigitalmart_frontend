<template>
  <div>
    {{ images }}
    <Carousel
      :verticalViewPortHeight="2000"
      :autoplayInterval="4000"
      :value="images"
      :numVisible="1"
      :numScroll="1"
      :showIndicators="false"
      :showNavigators="false"
      circular
      class="rounded-lg w-full hidden sm:block"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.data.src"
          :alt="slotProps.data.alt"
          class="rounded object-cover w-full h-screen"
        />
      </template>
    </Carousel>
  </div>
</template>

<script>
// import { Carousel } from "primevue/carousel";
export default {
  props: {
    images: {
      type: Array,
      default: () => [
        {
          src: "https://media.istockphoto.com/id/699518640/photo/security-camera-for-safety-on-blue-sky-and-city-background.jpg?s=612x612&w=0&k=20&c=JtBUJrHAAxOBToxJlj2iZ2tvL23MkAYVD32EXVpbwxY=",
          alt: "Surveillance Camera 1",
        },
        {
          src: "https://media.istockphoto.com/id/1405489463/photo/three-quarter-view-of-varifocal-surveillance-camera-with-a-house-on-background.jpg?s=612x612&w=0&k=20&c=3YxtJAA4DiOgew23ZFNOgMc6Mmg29_D0oy_RWvNTA2w=",
          alt: "Surveillance Camera 2",
        },
        {
          src: "https://media.istockphoto.com/id/1410977641/photo/high-technology-security-monitoring-system-cctv-camera.jpg?s=612x612&w=0&k=20&c=ueVgTwwn5Xq-S0Tz6Wfj9sILEubWxURkzkvVrzpSYRI=",
          alt: "Surveillance Camera 3",
        },
      ],
    },
  },
  components: {
    // Carousel,
  },
  data() {
    return {
      //   images: [
      //     {
      //       src: "https://media.istockphoto.com/id/699518640/photo/security-camera-for-safety-on-blue-sky-and-city-background.jpg?s=612x612&w=0&k=20&c=JtBUJrHAAxOBToxJlj2iZ2tvL23MkAYVD32EXVpbwxY=",
      //       alt: "Surveillance Camera 1",
      //     },
      //     {
      //       src: "https://media.istockphoto.com/id/1405489463/photo/three-quarter-view-of-varifocal-surveillance-camera-with-a-house-on-background.jpg?s=612x612&w=0&k=20&c=3YxtJAA4DiOgew23ZFNOgMc6Mmg29_D0oy_RWvNTA2w=",
      //       alt: "Surveillance Camera 2",
      //     },
      //     {
      //       src: "https://media.istockphoto.com/id/1410977641/photo/high-technology-security-monitoring-system-cctv-camera.jpg?s=612x612&w=0&k=20&c=ueVgTwwn5Xq-S0Tz6Wfj9sILEubWxURkzkvVrzpSYRI=",
      //       alt: "Surveillance Camera 3",
      //     },
      //   ],
    };
  },
  mounted() {
    this.images = [
      {
        src: "https://media.istockphoto.com/id/699518640/photo/security-camera-for-safety-on-blue-sky-and-city-background.jpg?s=612x612&w=0&k=20&c=JtBUJrHAAxOBToxJlj2iZ2tvL23MkAYVD32EXVpbwxY=",
        alt: "Surveillance Camera 1",
      },
      {
        src: "https://media.istockphoto.com/id/1405489463/photo/three-quarter-view-of-varifocal-surveillance-camera-with-a-house-on-background.jpg?s=612x612&w=0&k=20&c=3YxtJAA4DiOgew23ZFNOgMc6Mmg29_D0oy_RWvNTA2w=",
        alt: "Surveillance Camera 2",
      },
      {
        src: "https://media.istockphoto.com/id/1410977641/photo/high-technology-security-monitoring-system-cctv-camera.jpg?s=612x612&w=0&k=20&c=ueVgTwwn5Xq-S0Tz6Wfj9sILEubWxURkzkvVrzpSYRI=",
        alt: "Surveillance Camera 3",
      },
    ];
  },
};
</script>
