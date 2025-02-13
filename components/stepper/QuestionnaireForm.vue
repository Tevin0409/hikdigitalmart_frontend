<template>
  <div class="flex w-full items-center justify-center p-6 pt-8">
    <!-- <img src="@/assets/images/logoo.png" alt="Login" class="h-28 w-28" /> -->
    <Stepper v-model:value="activeStep" class="w-full max-w-lg min-h-[20rem]">
      <StepList>
        <Step
          v-slot="{ activateCallback, value, a11yAttrs }"
          asChild
          :value="1"
        >
          <div class="flex flex-row flex-auto gap-2" v-bind="a11yAttrs.root">
            <button
              class="bg-transparent border-0 inline-flex flex-col gap-2"
              @click="activateCallback"
              v-bind="a11yAttrs.header"
            >
              <span
                :class="[
                  'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                  {
                    'bg-primary text-primary-contrast border-primary':
                      value <= activeStep,
                    'border-surface-200 dark:border-surface-700':
                      value > activeStep,
                  },
                ]"
              >
                <i class="pi pi-building" />
              </span>
            </button>
            <Divider />
          </div>
        </Step>
        <Step
          v-slot="{ activateCallback, value, a11yAttrs }"
          asChild
          :value="2"
        >
          <div
            class="flex flex-row flex-auto gap-2 pl-2"
            v-bind="a11yAttrs.root"
          >
            <button
              class="bg-transparent border-0 inline-flex flex-col gap-2"
              @click="activateCallback"
              v-bind="a11yAttrs.header"
            >
              <span
                :class="[
                  'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                  {
                    'bg-primary text-primary-contrast border-primary':
                      value <= activeStep,
                    'border-surface-200 dark:border-surface-700':
                      value > activeStep,
                  },
                ]"
              >
                <i class="pi pi-cogs" />
              </span>
            </button>
            <Divider />
          </div>
        </Step>
        <Step
          v-slot="{ activateCallback, value, a11yAttrs }"
          asChild
          :value="3"
        >
          <div class="flex flex-row pl-2" v-bind="a11yAttrs.root">
            <button
              class="bg-transparent border-0 inline-flex flex-col gap-2"
              @click="activateCallback"
              v-bind="a11yAttrs.header"
            >
              <span
                :class="[
                  'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                  {
                    'bg-primary text-primary-contrast border-primary':
                      value <= activeStep,
                    'border-surface-200 dark:border-surface-700':
                      value > activeStep,
                  },
                ]"
              >
                <i class="pi pi-question-circle" />
              </span>
            </button>
          </div>
        </Step>
      </StepList>

      <StepPanels>
        <!-- Section 1: Business Identification -->
        <StepPanel v-slot="{ activateCallback }" :value="1">
          <div
            class="flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]"
          >
            <div class="text-center mt-4 mb-4 text-xl font-semibold">
              Section 1: Business Identification
            </div>
            <div class="field">
              <label for="businessName" class="font-bold"
                >Business/Company Name</label
              >
              <InputText
                id="businessName"
                v-model="businessName"
                type="text"
                placeholder="Enter business name"
                class="w-full"
              />
            </div>
            <div class="field">
              <label for="phoneNumber" class="font-bold">Phone Number</label>
              <InputText
                id="phoneNumber"
                v-model="phoneNumber"
                type="tel"
                placeholder="Enter phone number"
                class="w-full"
              />
            </div>
            <div class="field">
              <label for="email" class="font-bold">Email Address</label>
              <InputText
                id="email"
                v-model="email"
                type="email"
                placeholder="Enter email address"
                class="w-full"
              />
            </div>
            <div class="field">
              <label for="location" class="font-bold">Business Location</label>
              <InputText
                id="location"
                v-model="location"
                type="text"
                placeholder="City, State, Country"
                class="w-full"
              />
            </div>
            <div class="font-bold">Business Type</div>
            <!-- <div class="flex flex-wrap gap-4">
              <div class="flex items-center gap-2">
                <RadioButton
                  v-model="ingredient"
                  inputId="ingredient1"
                  name="pizza"
                  value="Cheese"
                />
                <label for="ingredient1">Cheese</label>
              </div>
            </div> -->

            <div
              v-for="category in businessCategories"
              :key="category.key"
              class="flex items-center gap-2"
            >
              <RadioButton
                v-model="businessType"
                :inputId="category.key"
                name="dynamic"
                :value="category.key"
                class="flex"
              />
              <label :for="category.key">{{ category.name }}</label>
            </div>
            <div class="font-bold">Years of Experience</div>
            <div
              v-for="category in yearExperiences"
              :key="category.key"
              class="flex items-center gap-2"
            >
              <RadioButton
                v-model="experienceYears"
                :inputId="category.key"
                name="dynamic1"
                :value="category.key"
              />
              <label :for="category.key">{{ category.name }}</label>
            </div>
          </div>
          <div class="flex pt-6 justify-end">
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback(2)"
            />
          </div>
        </StepPanel>

        <!-- Section 2: Technical Experience -->
        <StepPanel v-slot="{ activateCallback }" :value="2">
          <div
            class="flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]"
          >
            <div class="text-center mt-4 mb-4 text-xl font-semibold">
              Section 2: Technical Experience
            </div>
            <div>
              <label class="font-bold py-5"
                >Which of the following areas do you have experience with
                ?</label
              >
              <div
                v-for="category of experienceAreasList"
                :key="category.key"
                class="flex items-center gap-2"
              >
                <Checkbox
                  v-model="experienceAreas"
                  :inputId="category.key"
                  name="category"
                  :value="category.name"
                />
                <label :for="category.key">{{ category.name }}</label>
              </div>
            </div>
            <div>
              <label class="font-bold pb-3"
                >Which brands have you primarily worked with?</label
              >
              <div
                v-for="category of brandsWorkedWithList"
                :key="category.key"
                class="flex items-center gap-2"
              >
                <Checkbox
                  v-model="brandsWorkedWith"
                  :inputId="category.key"
                  name="category"
                  :value="category.key"
                />
                <label :for="category.key">{{ category.name }}</label>
              </div>
              <InputText
                v-if="brandsWorkedWith.includes('Other')"
                id="purchaseSource"
                v-model="purchaseSource"
                type="text"
                placeholder="Please Specify ..."
                class="w-full mt-4"
              />
            </div>

            <div class="field">
              <label class="font-bold pb-3">
                Do you have experience integrating security systems into larger
                solutions?</label
              >
              <div
                v-for="category in integrationExperienceList"
                :key="category.key"
                class="flex items-center gap-2"
              >
                <RadioButton
                  v-model="integrationExperience"
                  :inputId="category.key"
                  name="integrationExperience"
                  :value="category.name"
                />
                <label :for="category.key">{{ category.name }}</label>
              </div>
            </div>
            <div class="field">
              <label class="font-bold pb-3">
                Are you familiar with Hikvision product certifications and
                installation standards?</label
              >
              <div
                v-for="category in familiarWithStandards"
                :key="category.key"
                class="flex items-center gap-2"
              >
                <RadioButton
                  v-model="familiarWithStandard"
                  :inputId="category.key"
                  name="familiarWithStandard"
                  :value="category.name"
                />
                <label :for="category.key">{{ category.name }}</label>
              </div>
            </div>
          </div>
          <div class="flex pt-6 justify-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback(1)"
            />
            <Button
              label="Next"
              icon="pi pi-arrow-right"
              iconPos="right"
              @click="activateCallback(3)"
            />
          </div>
        </StepPanel>

        <!-- Section 3: Technical Questions -->
        <StepPanel v-slot="{ activateCallback }" :value="3">
          <div
            class="flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]"
          >
            <div class="text-center mt-4 mb-4 text-xl font-semibold">
              Section 3: Technical Questions
            </div>
            <div class="field">
              <label for="purchaseSource" class="font-bold pb-3">
                Where do you currently purchase your security products? (Please
                select all that apply and provide details for each
                category)</label
              >
              <div
                v-for="category of wherePurchase"
                :key="category.key"
                class="flex items-center gap-2"
              >
                <Checkbox
                  v-model="purchaseSource"
                  :inputId="category.key"
                  name="purchaseSource"
                  :value="category.name"
                />
                <label :for="category.key">{{ category.name }}</label>
              </div>
            </div>
            <div class="field">
              <label class="font-bold pb-3"
                >Do you currently purchase Hikvision products?</label
              >
              <div
                v-for="category in options"
                :key="category.key"
                class="flex items-center gap-2"
              >
                <RadioButton
                  v-model="purchaseHikvision"
                  :inputId="category.key"
                  name="purchaseHikvision"
                  :value="category.name"
                />
                <label :for="category.key">{{ category.name }}</label>
              </div>
            </div>
            <div class="field">
              <label class="font-bold pb-3">
                Technical Expertise Verification
                <br />
                <span>
                  For those working with Hikvision products: How do you
                  configure a Hikvision NVR to enable remote viewing on a mobile
                  device?</span
                >
              </label>
              <IftaLabel class="mt-4">
                <Textarea
                  id="summary"
                  v-model="value"
                  rows="5"
                  cols="30"
                  style="resize: none"
                  class="w-full"
                />
                <label for="description">Summary</label>
              </IftaLabel>
            </div>

            <div class="field">
              <label class="font-bold pb-3">
                <span>
                  What is the difference between Hikvision’s AcuSense and
                  ColorVu technologies?</span
                >
              </label>
              <IftaLabel class="mt-4">
                <Textarea
                  id="summary"
                  v-model="value"
                  rows="5"
                  cols="30"
                  style="resize: none"
                  class="w-full"
                />
                <label for="description">Summary</label>
              </IftaLabel>
            </div>
            <div class="field">
              <label class="font-bold pb-3">
                <span
                  >How would you troubleshoot a CCTV camera that is not
                  displaying video on the NVR?</span
                >
              </label>
              <IftaLabel class="mt-4">
                <Textarea
                  id="troubleshoot_cctv"
                  v-model="value"
                  rows="5"
                  cols="30"
                  style="resize: none"
                  class="w-full"
                />
                <label for="troubleshoot_cctv">Summary</label>
              </IftaLabel>
            </div>

            <div class="field">
              <label class="font-bold pb-3">
                <span
                  >What are the key considerations when designing a network for
                  IP-based surveillance systems?</span
                >
              </label>
              <IftaLabel class="mt-4">
                <Textarea
                  id="network_design"
                  v-model="value"
                  rows="5"
                  cols="30"
                  style="resize: none"
                  class="w-full"
                />
                <label for="network_design">Summary</label>
              </IftaLabel>
            </div>

            <div class="field">
              <label class="font-bold pb-3">
                <span
                  >What areas would you like us to support you with as you
                  partner with Secure Digital Limited under Hik Digital
                  Mart?</span
                >
              </label>
              <IftaLabel class="mt-4">
                <Textarea
                  id="support_areas"
                  v-model="value"
                  rows="5"
                  cols="30"
                  style="resize: none"
                  class="w-full"
                />
                <label for="support_areas">Summary</label>
              </IftaLabel>
            </div>

            <div class="field">
              <label class="font-bold pb-3">
                <span>How can we best support your business? (Optional)</span>
              </label>
              <IftaLabel class="mt-4">
                <Textarea
                  id="business_support"
                  v-model="value"
                  rows="5"
                  cols="30"
                  style="resize: none"
                  class="w-full"
                />
                <label for="business_support">Summary</label>
              </IftaLabel>
            </div>
          </div>
          <div class="flex pt-6 justify-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback(2)"
            />
            <Button
              label="Submit"
              icon="pi pi-check"
              iconPos="right"
              @click="activateCallback(4)"
            />
          </div>
        </StepPanel>

        <StepPanel v-slot="{ activateCallback }" :value="4">
          <div
            class="flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]"
          >
            <div class="text-center mt-4 mb-4 text-sm font-semibold">
              <div class="p-6 rounded-lg shadow-md">
                Thank You!
                <p class="text-gray-700">
                  Your application will undergo a thorough review. Upon
                  successful verification, you will gain access to:
                </p>

                <ul class="list-disc text-left pl-5 text-gray-700 mt-3">
                  <li><strong>Reseller Pricing</strong></li>
                  <li>
                    <strong
                      >Comprehensive Marketing and Technical Resources</strong
                    >
                  </li>
                  <li><strong>Product and Business Support</strong></li>
                </ul>

                <p class="text-gray-700 mt-4">
                  For any inquiries or further assistance, please do not
                  hesitate to contact us:
                </p>

                <div class="bg-white p-4 rounded-lg shadow mt-4">
                  <p class="text-gray-800 font-semibold">
                    📧 Email:
                    <a
                      href="mailto:sdl@hikvisionkenya.com"
                      class="text-blue-600 hover:underline"
                      >sdl@hikvisionkenya.com</a
                    >
                  </p>
                  <p class="text-gray-800 font-semibold">
                    📞 Phone:
                    <a
                      href="tel:+254727909060"
                      class="text-blue-600 hover:underline"
                      >+254 727 909 060</a
                    >
                  </p>
                </div>

                <p class="text-gray-700 mt-6">
                  We look forward to the opportunity to collaborate with you.
                </p>

                <hr class="my-4 border-gray-300" />

                <p class="text-gray-800 font-bold">Best regards,</p>
                <p class="text-gray-700">
                  Secure Digital Limited | Hik Digital Mart Limited
                </p>
                <p class="text-gray-700 font-semibold">
                  SDLKenya Online Shop Administration Department
                </p>

                <div class="bg-white p-4 rounded-lg shadow mt-4">
                  <p class="text-gray-800 font-semibold">
                    📧 Email:
                    <a
                      href="mailto:sdl@hikvisionkenya.com"
                      class="text-blue-600 hover:underline"
                      >sdl@hikvisionkenya.com</a
                    >
                  </p>
                  <p class="text-gray-800 font-semibold">
                    📞 Phone:
                    <a
                      href="tel:+254727909060"
                      class="text-blue-600 hover:underline"
                      >+254 727 909 060</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex pt-6 justify-between">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="activateCallback(3)"
            />
          </div>
        </StepPanel>
      </StepPanels>
    </Stepper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      responseMessage: {},
      activeStep: 1,
      businessName: "",
      phoneNumber: "",
      email: "",
      location: "",
      businessType: null,
      experienceYears: null,
      experienceAreas: [],
      brandsWorkedWith: [],
      integrationExperience: null,
      familiarWithStandard: null,
      purchaseSource: "",
      purchaseHikvision: null,
      requiresTraining: null,
      businessCategories: [
        { name: "System Integrator", key: "System Integrator" },
        { name: "Reseller", key: "Reseller" },
        { name: "Technician", key: "Technician" },
        { name: "Other", key: "Other" },
      ],
      yearExperiences: [
        { name: "1 Year", key: "1 Year" },
        { name: "1-3 Years", key: "1-3 Years" },
        { name: "4-7 Years", key: "4-7 Years" },
        { name: "8+", key: "8+" },
      ],
      experienceAreasList: [
        { name: "CCTV Systems", key: "CCTV Systems" },
        { name: "Access Control Systems", key: "Access Control Systems" },
        { name: "Video Intercom Systems", key: "Video Intercom Systems" },
        {
          name: "Networking and Computer Products",
          key: "Networking and Computer Products",
        },
        { name: "Electrical Installations", key: "Electrical Installations" },
      ],
      brandsWorkedWithList: [
        { name: "Hikvision", key: "Hikvision" },
        { name: "Dahua", key: "Dahua" },
        { name: "Uniview", key: "Uniview" },
        { name: "Tandy", key: "Tandy" },
        { name: "Other (Please Specify)", key: "Other" },
      ],
      integrationExperienceList: [
        { name: "Yes, Extensive Experience", key: "Yes, Extensive Experience" },
        { name: "Some Experience", key: "Some Experience" },
        { name: "No Experience", key: "No Experience" },
      ],
      wherePurchase: [
        { name: "National Distributor", key: "National Distributor" },
        { name: "Regional Supplier", key: "Regional Supplier" },
        { name: "Online Retailer ", key: "Online Retailer " },
        { name: "Other", key: "Other" },
      ],
      familiarWithStandards: [
        { name: "Yes, I'm certified", key: "Yes, I'm certified" },
        {
          name: "I am familiar but not certified",
          key: "I am familiar but not certified",
        },
        {
          name: "No, but I am willing to learn",
          key: "No, but I am willing to learn",
        },
      ],
      options: [
        { name: "Yes", key: "Yes" },
        { name: "No", key: "No" },
        { name: "Not yet, but interested", key: "Not yet, but interested" },
      ],
    };
  },
  methods: {
    async submitForm() {
      // Prepare form data
      const formData = {
        businessName: this.businessName,
        phoneNumber: this.phoneNumber,
        email: this.email,
        location: this.location,
        businessType: this.businessType,
        experienceYears: this.experienceYears,
        experienceAreas: this.experienceAreas,
        brandsWorkedWith: this.brandsWorkedWith,
        integrationExperience: this.integrationExperience,
        familiarWithStandard: this.familiarWithStandard,
        purchaseSource: this.purchaseSource,
        purchaseHikvision: this.purchaseHikvision,
        requiresTraining: this.requiresTraining,
      };

      console.log("Form Data:", formData);

      try {
        // Make POST request to the backend API
        const { $axios } = useNuxtApp();

        const response = await $axios.post(
          "/user/technician-questionnaire",
          formData
        );

        // Handle success
        this.responseMessage = response.data.message;
        this.activateCallback(4);
        if (response.status === 200) {
          // alert('Form submitted successfully!');
        }
      } catch (error) {
        // Handle error
        console.error("Error submitting form:", error);
        // alert('There was an error submitting the form. Please try again.');
      } finally {
        // Reset form fields after submission
        // this.resetForm();
      }
    },
    resetForm() {
      this.businessName = "";
      this.phoneNumber = "";
      this.email = "";
      this.location = "";
      this.businessType = null;
      this.experienceYears = null;
      this.experienceAreas = [];
      this.brandsWorkedWith = [];
      this.integrationExperience = null;
      this.purchaseSource = "";
      this.purchaseHikvision = null;
      this.requiresTraining = null;
    },
  },
};
</script>

<style scoped>
/* .card {
    max-width: 40rem;
    margin: 0 auto;
    padding: 1.5rem;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
} */
.stepper-container {
  width: 100%;
  height: 100%;
}

.stepper-panel {
  min-height: 300px;
  max-width: 30rem;
  width: 100%;
}

@media (max-width: 768px) {
  .stepper-panel {
    min-height: 400px;
  }
}
</style>
