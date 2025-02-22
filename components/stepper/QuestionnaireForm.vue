<template>
  <div
    class="flex w-full align-center justify-center"
    style="
      background-image: url('https://www.sdl.co.ke/assets/images/icons/vector-1.png');
    "
  >
    <div class="flex w-full flex-col items-center justify-center">
      <div class="flex justify-center items-center absolute top-16 left-8">
        <a
          @click="$emit('back-to-signup')"
          class="text-primary text-md cursor-pointer hover:text-secondary"
        >
          <i
            class="pi pi-arrow-left text-primary pr-2 hover:text-secondary"
            style=""
          ></i>
          Back to Signup</a
        >
      </div>
      <div class="border shadow-xl mt-36 p-6 lg:ml-16 rounded-xl bg-white">
        <Stepper v-model:value="activeStep" class="">
          <StepList>
            <Step
              v-slot="{ activateCallback, value, a11yAttrs }"
              asChild
              :value="1"
            >
              <div
                class="flex flex-row flex-auto gap-2"
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
                    <i class="pi pi-cog" />
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
                <Divider />
              </div>
            </Step>
            <Step
              v-slot="{ activateCallback, value, a11yAttrs }"
              asChild
              :value="4"
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
                  Section 1: Business Identification
                </div>

                <!-- Form Fields for Section 1 -->
                <div class="flex gap-4">
                  <div class="field w-1/2">
                    <label for="firstName" class="font-bold">First Name</label>
                    <InputText
                      id="firstName"
                      v-model="firstName"
                      type="text"
                      placeholder="Enter first name"
                      class="w-full"
                    />
                    <small v-if="errors.firstName" class="text-red-500">
                      {{ errors.firstName }}
                    </small>
                  </div>

                  <div class="field w-1/2">
                    <label for="lastName" class="font-bold">Last Name</label>
                    <InputText
                      id="lastName"
                      v-model="lastName"
                      type="text"
                      placeholder="Enter last name"
                      class="w-full"
                    />
                    <small v-if="errors.lastName" class="text-red-500">
                      {{ errors.lastName }}
                    </small>
                  </div>
                </div>

                <div class="flex gap-4">
                  <div class="field w-1/2">
                    <label for="phoneNumber" class="font-bold"
                      >Phone Number</label
                    >
                    <InputText
                      id="phoneNumber"
                      v-model="phoneNumber"
                      type="tel"
                      placeholder="Enter phone number"
                      class="w-full"
                    />
                    <small v-if="errors.phoneNumber" class="text-red-500">
                      {{ errors.phoneNumber }}
                    </small>
                  </div>

                  <div class="field w-1/2">
                    <label for="email" class="font-bold">Email Address</label>
                    <InputText
                      id="email"
                      v-model="email"
                      type="email"
                      placeholder="Enter email address"
                      class="w-full"
                    />
                    <small v-if="errors.email" class="text-red-500">
                      {{ errors.email }}
                    </small>
                  </div>
                </div>

                <div class="flex gap-4">
                  <div class="field w-1/2">
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
                    <small v-if="errors.businessName" class="text-red-500">
                      {{ errors.businessName }}
                    </small>
                  </div>

                  <div class="field w-1/2">
                    <label for="location" class="font-bold"
                      >Business Location</label
                    >
                    <InputText
                      id="location"
                      v-model="location"
                      type="text"
                      placeholder="City, State, Country"
                      class="w-full"
                    />
                    <small v-if="errors.location" class="text-red-500">
                      {{ errors.location }}
                    </small>
                  </div>
                </div>

                <!-- Business Type Section -->
                <div class="flex flex-col gap-4">
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
                </div>

                <!-- Years of Experience Section -->
                <div>
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
                </div>
              </div>

              <div
                class="flex pt-6 justify-end"
                style="max-width: 800px; margin: 0 auto"
              >
                <Button
                  label="Next"
                  icon="pi pi-arrow-right"
                  iconPos="right"
                  @click="validateAndProceed(activateCallback, 1)"
                />
              </div>
            </StepPanel>

            <StepPanel
              v-slot="{ activateCallback }"
              :value="2"
              style="min-width: 40vw"
            >
              <div class="flex flex-col gap-4">
                <div class="text-center mt-4 mb-4 text-xl font-semibold">
                  Section 2: Technical Experience
                </div>

                <!-- Experience Areas (Checkboxes) -->
                <div>
                  <label class="font-bold py-5">
                    Which of the following areas do you have experience with?
                  </label>
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
                  <p v-if="experienceAreasError" class="text-red-500">
                    Please select at least one area of experience.
                  </p>
                </div>

                <!-- Brands Worked With (Checkboxes) -->
                <div>
                  <label class="font-bold pb-3">
                    Which brands have you primarily worked with?
                  </label>
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
                  <p v-if="brandsWorkedWithError" class="text-red-500">
                    Please select at least one brand.
                  </p>
                </div>

                <!-- Integration Experience (Radio Buttons) -->
                <div class="field">
                  <label class="font-bold pb-3">
                    Do you have experience integrating security systems into
                    larger solutions?
                  </label>
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
                  <p v-if="integrationExperienceError" class="text-red-500">
                    Please select an option.
                  </p>
                </div>

                <!-- Familiar with Standards (Radio Buttons) -->
                <div class="field">
                  <label class="font-bold pb-3">
                    Are you familiar with Hikvision product certifications and
                    installation standards?
                  </label>
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
                  <p v-if="familiarWithStandardError" class="text-red-500">
                    Please select an option.
                  </p>
                </div>
              </div>

              <!-- Navigation Buttons -->
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
                  @click="validateAndProceed(activateCallback, 2)"
                />
              </div>
            </StepPanel>
            <StepPanel
              v-slot="{ activateCallback }"
              :value="3"
              style="min-width: 40vw"
            >
              <div class="flex flex-col gap-4">
                <div class="text-center mt-4 mb-4 text-xl font-semibold">
                  Section 3: Technical Questions
                </div>

                <!-- Where do you purchase security products -->
                <div class="field">
                  <label for="purchaseSource" class="font-bold pb-3">
                    Where do you currently purchase your security products?
                    (Please select all that apply and provide details for each
                    category)
                  </label>
                  <div
                    v-for="category in wherePurchase"
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
                  <p v-if="purchaseError" class="text-red-500">
                    Please select an option.
                  </p>
                </div>

                <!-- Purchase Hikvision products -->
                <div class="field">
                  <label class="font-bold pb-3">
                    Do you currently purchase Hikvision products?
                  </label>
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
                  <p v-if="currentlyPurchaseError" class="text-red-500">
                    Please select an option.
                  </p>
                </div>

                <!-- Textarea fields with validation -->
                <div
                  v-for="field in textareaFields"
                  :key="field.id"
                  class="field"
                >
                  <label class="font-bold pb-3">
                    <span v-html="field.label"></span>
                  </label>
                  <IftaLabel class="mt-4">
                    <Textarea
                      :id="field.id"
                      v-model="formData[field.model]"
                      rows="5"
                      cols="30"
                      style="resize: none"
                      class="w-full"
                    />
                    <label :for="field.id">Summary</label>
                  </IftaLabel>
                  <p v-if="errors[field.model]" class="text-red-500">
                    {{ errors[field.model] }}
                  </p>
                </div>
              </div>

              <!-- Navigation Buttons -->
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
                  @click="handleSubmit(activateCallback)"
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
                          >Comprehensive Marketing and Technical
                          Resources</strong
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
    </div>
    <div class="hidden md:block h-full w-full">
      <Carousel
        :verticalViewPortHeight="2000"
        :value="images"
        :numVisible="1"
        :numScroll="1"
        :showIndicators="false"
        :showNavigators="false"
        circular
        autoplayInterval="4000"
        class="rounded-lg w-full"
      >
        <template #item="slotProps">
          <div
            class="relative w-full h-screen flex justify-center items-center"
          >
            <img
              :src="slotProps.data.src"
              :alt="slotProps.data.alt"
              class="rounded-xl object-cover w-100 h-100"
            />
            <div
              class="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white py-2 px-4 rounded"
            >
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
      firstName: "",
      lastName: "",

      phoneNumber: "",
      email: "",
      businessName: "",
      location: "",
      errors: {},

      businessType: null,
      experienceYears: null,
      experienceAreas: [],
      brandsWorkedWith: [],
      integrationExperience: null,
      familiarWithStandard: null,
      purchaseSource: "",
      purchaseHikvision: null,
      requiresTraining: null,
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
  methods: {
    handleSubmit(activateCallback) {
      if (this.validateForm()) {
        console.log("Form submitted:", { ...this.formData });
        this.submitForm();
      } else {
        console.log("Validation failed");
      }
    },
    validateForm() {
      let isValid = true;
      this.errors = {};

      this.purchaseError = this.purchaseSource.length == 0;
      if (this.purchaseError) isValid = false;

      this.currentlyPurchaseError = !this.purchaseHikvision;
      if (this.currentlyPurchaseError) isValid = false;

      this.textareaFields.forEach(field => {
        if (
          !this.formData[field.model].trim() &&
          field.id !== "businessSupport"
        ) {
          this.errors[field.model] = "This field cannot be empty.";
          isValid = false;
        }
      });

      return isValid;
    },
    validateAndProceed(activateCallback, x) {
      this.errors = {}; // Reset errors
      if (x == 1) {
        // Validation checks
        if (!this.firstName) this.errors.firstName = "First name is required.";
        if (!this.lastName) this.errors.lastName = "Last name is required.";
        if (!this.phoneNumber)
          this.errors.phoneNumber = "Phone number is required.";
        if (!this.email) this.errors.email = "Email address is required.";
        if (!this.businessName)
          this.errors.businessName = "Business name is required.";
        if (!this.location) this.errors.location = "Location is required.";

        if (!this.businessType)
          this.errors.businessType = "Business Type is required.";
        if (!this.experienceYears)
          this.errors.experienceYears = "Experience Years is required.";

        // Proceed to the next step if no errors
        if (Object.keys(this.errors).length === 0) {
          activateCallback(2);
        }
      }
      if (x == 2) {
        console.log("sxasxsax");
        this.experienceAreasError = false;
        this.brandsWorkedWithError = false;
        this.integrationExperienceError = false;
        this.familiarWithStandardError = false;

        // Validate Checkboxes
        if (this.experienceAreas.length === 0) {
          this.experienceAreasError = true;
        }
        if (this.brandsWorkedWith.length === 0) {
          this.brandsWorkedWithError = true;
        }

        // Validate Radio Buttons
        if (!this.integrationExperience) {
          this.integrationExperienceError = true;
        }
        if (!this.familiarWithStandard) {
          this.familiarWithStandardError = true;
        }

        // Proceed to the next step if no errors
        if (
          !this.experienceAreasError &&
          !this.brandsWorkedWithError &&
          !this.integrationExperienceError &&
          !this.familiarWithStandardError
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
