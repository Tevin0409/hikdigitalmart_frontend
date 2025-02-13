<template>
    <div class="w-1/4 px-4">
        <Card>
            <template #title>Apply Filters</template>
            <template #content>
                <div v-for="(filter, index) in filters" :key="index" class="mb-6">
                    <h4 class="font-medium mb-2">{{ filter.label }}</h4>
                    <div v-if="filter.type === 'checkbox'" class="space-y-2">

                        <div v-for="option in filter.options" :key="option" class="flex items-center">
                            <Checkbox v-model="filter.selected" :value="option" class="mr-2" />
                            <label :for="option">{{ option }}</label>
                        </div>
                    </div>

                    <div v-if="filter.type === 'range'" class="space-y-2">

                        <div class="w-56">
                            <div class="flex gap-2">
                                <!-- Bind the inputs to the slider values -->
                                <input type="number" v-model="filter.range.values[0]" placeholder="Min."
                                    class="w-full border rounded-md p-2" />
                                <input type="number" v-model="filter.range.values[1]" placeholder="Max."
                                    class="w-full border rounded-md p-2" />
                            </div>

                            <!-- Bind the slider to the range values -->
                            <Slider v-model="filter.range.values" range class="w-56 mt-3 pt-2" :min="0" :max="1000"
                                :step="1" />
                        </div>


                        <button @click="applyRangeFilter(filter)"
                            class="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
                            OK
                        </button>
                    </div>
                </div>
            </template>
        </Card>
        <!-- <Card class="shadow-lg border rounded-md">
            <h3 class="text-lg font-bold mb-4">Filters</h3>
            <div v-for="(filter, index) in filters" :key="index" class="mb-6">
              <h4 class="font-medium mb-2">{{ filter.label }}</h4>
              <div v-if="filter.type === 'checkbox'" class="space-y-1">
                <Checkbox v-for="option in filter.options" :key="option" v-model="filter.selected" :value="option"
                  :label="option" />
              </div>
              <div v-if="filter.type === 'range'" class="space-y-2">
                <input type="number" v-model="filter.range.min" placeholder="Min."
                  class="w-full border rounded-md p-2" />
                <input type="number" v-model="filter.range.max" placeholder="Max."
                  class="w-full border rounded-md p-2" />
                <button @click="applyRangeFilter(filter)" class="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
                  OK
                </button>
              </div>
            </div>
          </Card> -->
    </div>
</template>
<script setup>
import { ref } from "vue"
const filters = ref([
    {
        label: "Resolution",
        type: "checkbox",
        options: ["720p", "1080p", "4K"],
        selected: [],
    },
    {
        label: "Price",
        type: "range",
        range: {
            values: [100, 500], // Default slider values [min, max]
        },
    },
    {
        label: "Special Features",
        type: "checkbox",
        options: [
            "Night Vision",
            "Motion Detection",
            "Two-way Audio",
            "Face Detection",
            "Waterproof",
            "Pan-Tilt",
            "Face Recognition",
            "Built-in Siren",
            "One-way Audio",
            "Human Motion Tracking",
            "Sound Detection",
            "Vandal-proof",
            "Finger Recognition",
            "People Counting",
            "Temperature Measurement",
        ],
        selected: [],
    },
    {
        label: "Type",
        type: "checkbox",
        options: [
            "IP Camera",
            "Dome Camera",
            "Bullet Camera",
            "Analog Camera",
            "PTZ Camera",
        ],
        selected: [],
    },])

</script>

<style></style>