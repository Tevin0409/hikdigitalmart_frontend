<template>
  <div class="flex w-full align-center justify-center" style="
      background-image: url('https://www.sdl.co.ke/assets/images/icons/vector-1.png');
    ">
    <div class="flex w-full flex-col items-center justify-center">
      <div class="flex justify-center items-center absolute top-16 left-8">
        <a @click="$emit('back-to-signup')" class="text-primary text-md cursor-pointer hover:text-secondary">
          <i class="pi pi-arrow-left text-primary pr-2 hover:text-secondary" style=""></i>
          Back to Signup</a>
      </div>
      <div class="border shadow-xl mt-36 p-6 lg:ml-16 rounded-xl bg-white">
        <Stepper v-model:value="activeStep" class="">
          <StepList>
            <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="1">
              <div class="flex flex-row flex-auto gap-2" v-bind="a11yAttrs.root">
                <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="activateCallback"
                  v-bind="a11yAttrs.header">
                  <span :class="[
                    'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                    {
                      'bg-primary text-primary-contrast border-primary':
                        value <= activeStep,
                      'border-surface-200 dark:border-surface-700':
                        value > activeStep,
                    },
                  ]">
                    <i class="pi pi-building" />
                  </span>
                </button>
                <Divider />
              </div>
            </Step>
            <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="2">
              <div class="flex flex-row flex-auto gap-2 pl-2" v-bind="a11yAttrs.root">
                <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="activateCallback"
                  v-bind="a11yAttrs.header">
                  <span :class="[
                    'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                    {
                      'bg-primary text-primary-contrast border-primary':
                        value <= activeStep,
                      'border-surface-200 dark:border-surface-700':
                        value > activeStep,
                    },
                  ]">
                    <i class="pi pi-cog" />
                  </span>
                </button>
                <Divider />
              </div>
            </Step>
            <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="3">
              <div class="flex flex-row pl-2" v-bind="a11yAttrs.root">
                <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="activateCallback"
                  v-bind="a11yAttrs.header">
                  <span :class="[
                    'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                    {
                      'bg-primary text-primary-contrast border-primary':
                        value <= activeStep,
                      'border-surface-200 dark:border-surface-700':
                        value > activeStep,
                    },
                  ]">
                    <i class="pi pi-question-circle" />
                  </span>
                </button>
                <Divider />
              </div>
            </Step>
            <Step v-slot="{ activateCallback, value, a11yAttrs }" asChild :value="4">
              <div class="flex flex-row pl-2" v-bind="a11yAttrs.root">
                <button class="bg-transparent border-0 inline-flex flex-col gap-2" @click="activateCallback"
                  v-bind="a11yAttrs.header">
                  <span :class="[
                    'rounded-full border-2 w-12 h-12 inline-flex items-center justify-center',
                    {
                      'bg-primary text-primary-contrast border-primary':
                        value <= activeStep,
                      'border-surface-200 dark:border-surface-700':
                        value > activeStep,
                    },
                  ]">
                    <i class="pi pi-check-circle" />
                  </span>
                </button>
              </div>
            </Step>
          </StepList>

          <StepPanels>
            <StepPanel v-slot="{ activateCallback }" :value="1">
              <div class="flex flex-col gap-4 mx-auto" style="min-width: 40vw">
                <div class="text-center mt-4 mb-4 text-xl font-semibold">
                  Section 1: Personal Information
                </div>

                <div class="flex gap-4">
                  <div class="field w-full">
                    <label for="firstName" class="font-bold">Company Name ( Full company name )</label>
                    <InputText id="wholesalerPersonalInfo.companyName" v-model="wholesalerPersonalInfo.companyName"
                      type="text" placeholder="Enter Company name" class="w-full" />
                    <small v-if="errors.wholesalerPersonalInfo.companyName" class="text-red-500">
                      {{ errors.wholesalerPersonalInfo.companyName }}
                    </small>
                  </div>

                </div>

                <!-- Form Fields for Section 1 -->
                <div class="flex gap-4">
                  <div class="field w-1/2">
                    <label for="firstName" class="font-bold">First Name</label>
                    <InputText id="wholesalerPersonalInfo.firstName" v-model="wholesalerPersonalInfo.firstName"
                      type="text" placeholder="Enter first name" class="w-full" />
                    <small v-if="errors.wholesalerPersonalInfo.firstName" class="text-red-500">
                      {{ errors.wholesalerPersonalInfo.firstName }}
                    </small>
                  </div>

                  <div class="field w-1/2">
                    <label for="wholesalerPersonalInfo.lastName" class="font-bold">Last Name</label>
                    <InputText id="wholesalerPersonalInfo.lastName" v-model="wholesalerPersonalInfo.lastName"
                      type="text" placeholder="Enter last name" class="w-full" />
                    <small v-if="errors.wholesalerPersonalInfo.lastName" class="text-red-500">
                      {{ errors.wholesalerPersonalInfo.lastName }}
                    </small>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="field w-1/2">
                    <label for="wholesalerPersonalInfo.email" class="font-bold">Email Address</label>
                    <InputText id="wholesalerPersonalInfo.email" v-model="wholesalerPersonalInfo.email" type="email"
                      placeholder="Enter email address " class="w-full" />
                    <small v-if="errors.wholesalerPersonalInfo.email" class="text-red-500">
                      {{ errors.wholesalerPersonalInfo.email }}
                    </small>
                  </div>
                  <div class="field w-1/2">
                    <label for="wholesalerPersonalInfo.email2" class="font-bold">Email Address 2</label>
                    <InputText id="wholesalerPersonalInfo.email2" v-model="wholesalerPersonalInfo.email2" type="email"
                      placeholder="Enter email 2 address" class="w-full" />
                    <small v-if="errors.wholesalerPersonalInfo.email2" class="text-red-500">
                      {{ errors.wholesalerPersonalInfo.email2 }}
                    </small>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="field w-1/2">
                    <label for="wholesalerPersonalInfo.phoneNumber" class="font-bold">Phone Number 1</label>
                    <InputText id="wholesalerPersonalInfo.phoneNumber" v-model="wholesalerPersonalInfo.phoneNumber"
                      type="tel" placeholder="Enter phone number" class="w-full" />
                    <small v-if="errors.wholesalerPersonalInfo.phoneNumber" class="text-red-500">
                      {{ errors.wholesalerPersonalInfo.phoneNumber }}
                    </small>
                  </div>
                  <div class="field w-1/2">
                    <label for="wholesalerPersonalInfo.phoneNumber2" class="font-bold">Phone Number 2</label>
                    <InputText id="wholesalerPersonalInfo.phoneNumber2" v-model="wholesalerPersonalInfo.phoneNumber2"
                      type="tel" placeholder="Enter phone number" class="w-full" />
                    <small v-if="errors.wholesalerPersonalInfo.phoneNumber2" class="text-red-500">
                      {{ errors.wholesalerPersonalInfo.phoneNumber2 }}
                    </small>
                  </div>

                </div>


                <div class="flex gap-4">

                  <div class="field w-1/2">
                    <label for="wholesalerPersonalInfo.address" class="font-bold">Business Address</label>
                    <InputText id="wholesalerPersonalInfo.address" v-model="wholesalerPersonalInfo.address" type="text"
                      placeholder="Shop Location i.e Shop no, Building name, Street & Town" class="w-full" />
                    <small v-if="errors.wholesalerPersonalInfo.address" class="text-red-500">
                      {{ errors.wholesalerPersonalInfo.address }}
                    </small>
                  </div>
                </div>

                <!-- Business Type Section -->
                <!-- <div class="flex flex-col gap-4">
                  <div class="font-bold mb-2">Business Type</div>
                  <div class="flex flex-wrap gap-4">
                    <div
                      v-for="category in businessCategories"
                      :key="category.key"
                      class="flex items-center gap-2"
                    >
                      <RadioButton
                        v-model="businessType"
                        :inputId="category.key"
                        name="businessType"
                        :value="category.key"
                      />
                      <label :for="category.key">{{ category.name }}</label>
                    </div>
                    <small v-if="errors.businessType" class="text-red-500">
                      {{ errors.businessType }}
                    </small>
                  </div>
                </div> -->

                <!-- Years of Experience Section -->
                <!-- <div>
                  <div class="font-bold mb-2">Years of Experience</div>
                  <div class="flex flex-wrap gap-4">
                    <div
                      v-for="category in yearExperiences"
                      :key="category.key"
                      class="flex items-center gap-2"
                    >
                      <RadioButton
                        v-model="experienceYears"
                        :inputId="category.key"
                        name="experienceYears"
                        :value="category.key"
                      />
                      <label :for="category.key">{{ category.name }}</label>
                    </div>
                    <small v-if="errors.experienceYears" class="text-red-500">
                      {{ errors.experienceYears }}
                    </small>
                  </div>
                </div> -->
              </div>

              <div class="flex pt-6 justify-end" style="max-width: 800px; margin: 0 auto">
                <Button label="Next" icon="pi pi-arrow-right" iconPos="right"
                  @click="validateAndProceed(activateCallback, 1)" />
              </div>
            </StepPanel>

            <StepPanel v-slot="{ activateCallback }" :value="2" style="min-width: 40vw">
              <div class="flex flex-col gap-4">
                <div class="text-center mt-4 mb-4 text-xl font-semibold">
                  Section 2: Business Details
                </div>
                <!-- Business Type (Radio Buttons) -->
                <div>
                  <label class="font-bold py-5">
                    Which of the following describes your business well?
                  </label>
                  {{ wholesalerBusinessInfo.selectedBusinessType }}
                  <div v-for="type in businessTypes" :key="type.key" class="flex items-center gap-2">
                    <RadioButton v-model="wholesalerBusinessInfo.selectedBusinessType" :inputId="type.key" name="selectedBrands.businessType"
                      :value="type.name" />
                    <label :for="type.key">{{ type.name }}</label>
                  </div>
                  <InputText v-if="wholesalerBusinessInfo.selectedBusinessType == 'Other'" v-model="wholesalerBusinessInfo.otherBrand" type="text"
                  placeholder="Please Specify ..." class="w-full mt-4" />
                </div>
                <!-- Brands Dealt With (Checkboxes) -->
                <div>
                  <label class="font-bold pb-3">
                    Which brands do you deal with?
                  </label>
                  <div v-for="brand in brandList" :key="brand.key" class="flex items-center gap-2">
                    <Checkbox v-model="wholesalerBusinessInfo.selectedBrands" :inputId="brand.key" name="wholesalerBusinessInfo.selectedBrands" :value="brand.name" />
                    <label :for="brand.key">{{ brand.name }}</label>
                  </div>
                  <InputText v-if="wholesalerBusinessInfo.selectedBrands.includes('Other')" v-model="wholesalerBusinessInfo.otherBrand" type="text"
                    placeholder="Please Specify ..." class="w-full mt-4" />
                </div>

                <!-- Strength in Security Brands (Checkboxes) -->
                <div>
                  <label class="font-bold pb-3">
                    Which security brand do you have strength in?
                  </label>
                  <div v-for="brand in securityBrands" :key="brand.key" class="flex items-center gap-2">
                    <Checkbox v-model="wholesalerBusinessInfo.selectedSecurityBrands" :inputId="brand.key" name="wholesalerBusinessInfo.selectedSecurityBrands"
                      :value="brand.name" />
                    <label :for="brand.key">{{ brand.name }}</label>
                  </div>
                </div>
              </div>

              <!-- Navigation Buttons -->
              <div class="flex pt-6 justify-between">
                <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback(1)" />
                <Button label="Next" icon="pi pi-arrow-right" iconPos="right"
                  @click="validateAndProceed(activateCallback, 2)" />
              </div>
            </StepPanel>

            <StepPanel v-slot="{ activateCallback }" :value="3" style="min-width: 40vw">
              <div class="flex flex-col gap-4">
                <div class="text-center mt-4 mb-4 text-xl font-semibold">
                  Section 3: Technical Questions
                </div>
                <!-- Product Categories (Checkboxes) -->
                <div>
                  <label class="font-bold pb-3">
                    Which product categories do you mostly deal with?
                  </label>
                  <div v-for="category in productCategories" :key="category.key" class="flex items-center gap-2">
                    <Checkbox v-model="wholesalerTechnicalInfo.selectedCategories" :inputId="category.key" name="wholesalerTechnicalInfo.selectedCategories"
                      :value="category.name" />
                    <label :for="category.key">{{ category.name }}</label>
                  </div>
                </div>

                <!-- Challenges with Hikvision (Textarea) -->
                <div>
                  <label class="font-bold pb-3">What are the challenges you have faced when dealing with
                    Hikvision?</label>
                  <Textarea v-model="wholesalerTechnicalInfo.hikvisionChallenges" rows="4" class="w-full"
                    placeholder="Describe challenges..." />
                </div>

                <!-- Advice to Secure Digital Limited (Textarea) -->
                <div>
                  <label class="font-bold pb-3">What would be your advice to Secure Digital Limited?</label>
                  <Textarea v-model="wholesalerTechnicalInfo.adviceToSecureDigital" rows="4" class="w-full"
                    placeholder="Share your advice..." />
                </div>
              </div>


              <!-- Navigation Buttons -->
              <div class="flex pt-6 justify-between">
                <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback(2)" />
                <Button label="Submit" icon="pi pi-check" iconPos="right" @click="handleSubmit(activateCallback)" />
              </div>
            </StepPanel>

            <StepPanel v-slot="{ activateCallback }" :value="4">
              <div class="flex flex-col gap-4 mx-auto w-full max-w-lg min-h-[20rem]">
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
                        <strong>Comprehensive Marketing and Technical
                          Resources</strong>
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
                        <a href="mailto:sdl@hikvisionkenya.com"
                          class="text-blue-600 hover:underline">sdl@hikvisionkenya.com</a>
                      </p>
                      <p class="text-gray-800 font-semibold">
                        📞 Phone:
                        <a href="tel:+254727909060" class="text-blue-600 hover:underline">+254 727 909 060</a>
                      </p>
                    </div>

                    <p class="text-gray-700 mt-6">
                      We look forward to the opportunity to collaborate with
                      you.
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
                        <a href="mailto:sdl@hikvisionkenya.com"
                          class="text-blue-600 hover:underline">sdl@hikvisionkenya.com</a>
                      </p>
                      <p class="text-gray-800 font-semibold">
                        📞 Phone:
                        <a href="tel:+254727909060" class="text-blue-600 hover:underline">+254 727 909 060</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex pt-6 justify-between">
                <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback(3)" />
              </div>
            </StepPanel>
          </StepPanels>
        </Stepper>
      </div>
    </div>
    <div class="hidden md:block h-full w-full">
      <Carousel :verticalViewPortHeight="2000" :autoplayInterval="4000" :value="images" :numVisible="1" :numScroll="1"
        :showIndicators="false" :showNavigators="false" circular class="rounded-lg w-full">
        <template #item="slotProps">
          <div class="relative w-full h-screen flex justify-center items-center">
            <img :src="slotProps.data.src" :alt="slotProps.data.alt" class="rounded-xl object-cover w-100 h-100" />
            <div
              class="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded">
              {{ slotProps.data.alt }}
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      responseMessage: {},
      activeStep: 1,
      wholesalerPersonalInfo: {
        companyName: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        phoneNumber2: "",
        email: "",
        email2: "",
        address: "",
      },
      wholesalerBusinessInfo: {
        selectedBusinessType: "",
        selectedBrands: [],
        selectedSecurityBrands: [],
        otherBrand: "",
      },
      wholesalerTechnicalInfo: {
        selectedCategories: [],
        hikvisionChallenges: "",
        adviceToSecureDigital: "",
        otherBrand:""
      },
      errors: {
        wholesalerPersonalInfo: {
          companyName: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          address: "",
        },
        wholesalerBusinessInfo: {
          selectedBusinessType: "",
          selectedBrands: [],
          selectedSecurityBrands: [],
        },
        wholesalerTechnicalInfo: {
          selectedCategories: [],
          hikvisionChallenges: "",
          adviceToSecureDigital: "",
        },
      },
      businessTypes: [
        { key: "stock_supply", name: "STOCK & SUPPLY ONLY." },
        { key: "stock_supply_install", name: "STOCK, SUPPLY & INSTALL." },
        { key: "supply_install", name: "SUPPLY & INSTALL" },
        { key: "install_only", name: "INSTALL ONLY" },
        { key: "other", name: "Other" }
      ],
      selectedBrands: [],
      brandList: [
        { key: "hikvision", name: "HIKVISION" },
        { key: "dahua", name: "DAHUA" },
        { key: "uniview", name: "UNIVIEW" },
        { key: "axis", name: "AXIS" },
        { key: "zkteco", name: "ZKTECO" },
        { key: "other", name: "Other" }
      ],
      selectedSecurityBrands: [],
      securityBrands: [
        { key: "hikvision", name: "HIKVISION" },
        { key: "dahua", name: "DAHUA" },
        { key: "uniview", name: "UNIVIEW" },
        { key: "axis", name: "AXIS" },
        { key: "zkteco", name: "ZKTECO" },
        { key: "other", name: "Other" }
      ],
      selectedCategories: [],
      productCategories: [
        { key: "analogue_cctv", name: "ANALOGUE CCTV/ DVR" },
        { key: "network_cctv", name: "NETWORK (IP) CCTV /NVR" },
        { key: "intercoms", name: "INTERCOMS" },
        { key: "access_control", name: "ACCESS CONTROL" },
        { key: "other", name: "Other" }
      ],

      images: [
        {
          src: "https://www.sdl.co.ke/assets/images/resource/about-5.png",
          alt: "EZVIZ H8c 4G LTE 2K Resolution Pan&Tilt Camera 4mm",
        },
        {
          src: "https://www.sdl.co.ke/assets/images/resource/about-6.png",
          alt: "EZVIZ H6c Pro 2K+ Pan & Tilt Smart Home Camera",
        },
        {
          src: "https://www.sdl.co.ke/assets/images/resource/about-7.png",
          alt: "Hikvision DS-2CD1127G2H-LIU(2.8mm)(O-STD) 2MP Smart Hybrid Light ColorVu Camera",
        },
      ],
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
      experienceAreasError: false,
      brandsWorkedWithError: false,
      integrationExperienceError: false,
      familiarWithStandardError: false,
      purchaseError: false,
      currentlyPurchaseError: false,
      formData: {
        technicalExpertise: "",
        hikvisionTechDifference: "",
        troubleshootCCTV: "",
        networkDesign: "",
        supportAreas: "",
        businessSupport: "",
      },
      textareaFields: [
        {
          id: "technicalExpertise",
          model: "technicalExpertise",
          label: `Technical Expertise Verification<br>
      <span>For those working with Hikvision products: How do you configure a
      Hikvision NVR to enable remote viewing on a mobile device?</span>`,
        },
        {
          id: "hikvisionTechDifference",
          model: "hikvisionTechDifference",
          label:
            "What is the difference between Hikvision’s AcuSense and ColorVu technologies?",
        },
        {
          id: "troubleshootCCTV",
          model: "troubleshootCCTV",
          label:
            "How would you troubleshoot a CCTV camera that is not displaying video on the NVR?",
        },
        {
          id: "networkDesign",
          model: "networkDesign",
          label:
            "What are the key considerations when designing a network for IP-based surveillance systems?",
        },
        {
          id: "supportAreas",
          model: "supportAreas",
          label:
            "What areas would you like us to support you with as you partner with Secure Digital Limited under Hik Digital Mart?",
        },
        {
          id: "businessSupport",
          model: "businessSupport",
          label: "How can we best support your business? (Optional)",
        },
      ],
    };
  },
  watch: {
    // wholesalerPersonalInfo: {
    //   handler(newValue) {
    //     this.errors = {
    //       wholesalerPersonalInfo: {
    //         companyName: newValue.companyName ? "" : "Company name is required.",
    //         firstName: newValue.firstName ? "" : "First name is required.",
    //         lastName: newValue.lastName ? "" : "Last name is required.",
    //         phoneNumber: newValue.phoneNumber
    //           ? ""
    //           : "Phone number is required.",
    //         email: newValue.email ? "" : "Email address is required.",
    //         address: newValue.address ? "" : "Business address is required.",
    //       },
    //       wholesalerBusinessInfo: {
    //         selectedBusinessType: newValue.selectedBusinessType
    //           ? ""
    //           : "Business type is required.",
    //         selectedBrands: newValue.selectedBrands.length
    //           ? ""
    //           : "At least one brand is required.",
    //         selectedSecurityBrands: newValue.selectedSecurityBrands.length
    //           ? ""
    //           : "At least one security brand is required.",
    //       },
    //       wholesalerTechnicalInfo: {
    //         selectedCategories: newValue.selectedCategories.length
    //           ? ""
    //           : "At least one product category is required.",
    //         hikvisionChallenges: newValue.hikvisionChallenges
    //           ? ""
    //           : "Hikvision challenges are required.",
    //         adviceToSecureDigital: newValue.adviceToSecureDigital
    //           ? ""
    //           : "Advice to Secure Digital is required.",
    //       },
    //     }
    //   },
    //   deep: true,
    // },
  },

  methods: {
    handleSubmit(activateCallback) {
      const data = { ...this.wholesalerPersonalInfo, ...this.wholesalerBusinessInfo, ...this.wholesalerTechnicalInfo }
      if (this.validateForm()) {

       console.log("Form Data:", data);
        this.submitForm();
      } else {
        console.log("Validation failed");
      }
    },
    validateForm() {
      let isValid = true;
      this.errors = {};

      // this.purchaseError = this.purchaseSource.length == 0;
      // if (this.purchaseError) isValid = false;

      // this.currentlyPurchaseError = !this.purchaseHikvision;
      // if (this.currentlyPurchaseError) isValid = false;

      // this.textareaFields.forEach(field => {
      //   if (
      //     !this.formData[field.model].trim() &&
      //     field.id !== "businessSupport"
      //   ) {
      //     this.errors[field.model] = "This field cannot be empty.";
      //     isValid = false;
      //   }
      // });

      return isValid;
    },
    hasErrors(obj) {
      return Object.values(obj).some(value => {
        if (typeof value === 'object') {
          return this.hasErrors(value);
        }
        return value !== "";
      });
    },
    validateAndProceed(activateCallback, x) {
      this.errors = {
        wholesalerPersonalInfo: {
          companyName: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          address: "",
        },
        wholesalerBusinessInfo: {
          selectedBusinessType: "",
          selectedBrands: [],
          selectedSecurityBrands: [],
        },
        wholesalerTechnicalInfo: {
          selectedCategories: [],
          hikvisionChallenges: "",
          adviceToSecureDigital: "",
        },
      };

      if (x == 1) {
        if (!this.wholesalerPersonalInfo.companyName) this.errors.wholesalerPersonalInfo.companyName = "Company name is required.";
        if (!this.wholesalerPersonalInfo.firstName) this.errors.wholesalerPersonalInfo.firstName = "First name is required.";
        if (!this.wholesalerPersonalInfo.lastName) this.errors.wholesalerPersonalInfo.lastName = "Last name is required.";
        if (!this.wholesalerPersonalInfo.phoneNumber)
          this.errors.wholesalerPersonalInfo.phoneNumber = "Phone number is required.";
        if (!this.wholesalerPersonalInfo.email) this.errors.wholesalerPersonalInfo.email = "Email address is required.";
        if (!this.wholesalerPersonalInfo.address)
          this.errors.wholesalerPersonalInfo.address = "Business address is required.";

        if (!this.hasErrors(this.errors)) {
          activateCallback(2);
        }
      }
      if (x == 2) {
    
        // this.experienceAreasError = false;
        // this.brandsWorkedWithError = false;
        // this.integrationExperienceError = false;
        // this.familiarWithStandardError = false;

        // Validate Checkboxes
        if(this.wholesalerBusinessInfo.selectedBusinessType.length === 0) {
          this.errors.wholesalerBusinessInfo.selectedBusinessType = "Business type is required.";
        }
        if (this.wholesalerBusinessInfo.selectedBrands.length === 0) {
          this.errors.wholesalerBusinessInfo.selectedBrands = "At least one brand is required.";
        }
        if (this.wholesalerBusinessInfo.selectedSecurityBrands.length === 0) {
          this.errors.wholesalerBusinessInfo.selectedSecurityBrands = "At least one security brand is required.";
        }

        // if (this.selectedBrands.length === 0) {
        //   this.experienceAreasError = true;
        // }
        // if (this.selectedBusinessType.length === 0) {
        //   this.brandsWorkedWithError = true;
        // }

        // if (this.selectedSecurityBrands.length === 0) {
        //   this.brandsWorkedWithError = true;
        // }

        // Validate Radio Buttons
        if (!this.integrationExperience) {
          this.integrationExperienceError = true;
        }
        if (!this.familiarWithStandard) {
          this.familiarWithStandardError = true;
        }

        // Proceed to the next step if no errors
        if (
          !this.selectedBrandsError &&
          !this.selectedBusinessTypeErrors &&
          !this.selectedSecurityBrandsError
          // !this.selected
        ) {
          activateCallback(3);
        }
      }
    },
    async submitForm() {
      // Prepare form data
      console.log("cdscs", this.formData);
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
      this.phoneNumber2 = "";
      this.email = "";
      this.email2 = "";
      this.address
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
