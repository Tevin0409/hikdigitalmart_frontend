<template>
    <div class="flex flex-row">
        <div class="basis-1/4 p-4">
            <div class="flex-grow flex flex-col space-y-4 border-r pr-4" v-for="i in categories">
                <div class="font-bold cursor-pointer hover:text-blue-600 pt-4">
                    {{ i.name }}
                </div>
            </div>
        </div>
        <div class="basis-3/4">
            <div class="relative w-full overflow-hidden">
                <div class="flex transition-transform duration-700"
                    :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                    <div v-for="(image, index) in images" :key="index" class="w-full flex-shrink-0">
                        <div class="p-4">
                            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                                <img :src="image.src" :alt="image.alt" class="w-full h-64 object-cover" />
                                <div class="p-4">
                                    <h2 class="text-lg font-bold">{{ image.title }}</h2>
                                    <p class="text-sm text-gray-600">{{ image.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Navigation Buttons -->
                <button
                    class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
                    @click="prevSlide">
                    &lt;
                </button>
                <button
                    class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
                    @click="nextSlide">
                    &gt;
                </button>
            </div>

            <!-- Dots -->
            <div class="flex justify-center mt-4 space-x-2">
                <div v-for="(image, index) in images" :key="index" class="w-3 h-3 rounded-full"
                    :class="currentIndex === index ? 'bg-blue-600' : 'bg-gray-400'" @click="goToSlide(index)"></div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "TopCard",
    components: {},
    setup() {
        const images = ref([
            {
                src: "data:image/jpeg;base64,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",
                alt: "Image 1",
                title: "HD Analogue Camera",
                description: "High-definition analogue cameras for security systems.",
            },
            {
                src: "https://media.istockphoto.com/id/1405489463/photo/three-quarter-view-of-varifocal-surveillance-camera-with-a-house-on-background.jpg?s=612x612&w=0&k=20&c=3YxtJAA4DiOgew23ZFNOgMc6Mmg29_D0oy_RWvNTA2w=",
                alt: "Image 2",
                title: "IP Network Camera",
                description: "Advanced IP cameras with superior video quality.",
            },
            {
                src: "https://media.istockphoto.com/id/1410977641/photo/high-technology-security-monitoring-system-cctv-camera.jpg?s=612x612&w=0&k=20&c=ueVgTwwn5Xq-S0Tz6Wfj9sILEubWxURkzkvVrzpSYRI=",
                alt: "Image 3",
                title: "Access Control Product",
                description: "Reliable access control systems for secure environments.",
            },
        ]);
        const categories = ref([
            {
                name: "HD ANALOGUE CAMERAS AND DVR",
                icon: "/assets/icons/cctv.svg",
            },
            {
                name: "IP NETWORK CAMERAS AND NVR",
                icon: "network",
            },
            {
                name: "ACCESS CONTROL PRODUCTS",
                icon: "lock",
            },
            {
                name: "VIDEO INTERCOM PRODUCTS",
                icon: "phone",
            },
            {
                name: "MONITOR DISPLAY PRODUCTS",
                icon: "monitor",
            },
            {
                name: "ACCESSORIES PRODUCTS",
                icon: "toolbox",
            },
        ]);

        return {
            categories, images
        }
    }
}
</script>

<style></style>