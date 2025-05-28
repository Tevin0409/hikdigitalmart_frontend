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
                <Toast />
                <div class="text-center mt-4 mb-4 text-xl font-semibold">
                  Section 1: Personal Information
                </div>

                <Form
                  v-slot="$form"
                  :initialValues="initialValues"
                  :resolver="resolver"
                  :validateOnValueUpdate="false"
                  :validateOnBlur="true"
                  :validateOnMount="['companyName']"
                  class="flex-col gap-4"
                  @submit="(e) => validateAndProceed(e, activateCallback, 1)"
                >
                  <div class="flex gap-4">
                    <div class="field w-full">
                      <label for="companyName" class="font-bold"
                        >Company Name (Full company name)</label
                      >
                      <InputText
                        name="companyName"
                        v-model="wholesalerPersonalInfo.companyName"
                        type="text"
                        class="w-full"
                      />
                      <Message
                        v-if="$form.companyName?.invalid"
                        severity="error"
                        size="small"
                        variant="simple"
                      >
                        {{ $form.companyName.error.message }}
                      </Message>
                    </div>
                  </div>

                  <div class="flex gap-4">
                    <div class="field w-1/2">
                      <label for="firstName" class="font-bold"
                        >First Name</label
                      >
                      <InputText
                        name="firstName"
                        v-model="wholesalerPersonalInfo.firstName"
                        type="text"
                        class="w-full"
                      />
                      <Message
                        v-if="$form.firstName?.invalid"
                        severity="error"
                        size="small"
                        variant="simple"
                      >
                        {{ $form.firstName.error.message }}
                      </Message>
                    </div>
                    <div class="field w-1/2">
                      <label for="lastName" class="font-bold">Last Name</label>
                      <InputText
                        name="lastName"
                        v-model="wholesalerPersonalInfo.lastName"
                        type="text"
                        class="w-full"
                      />
                      <Message
                        v-if="$form.lastName?.invalid"
                        severity="error"
                        size="small"
                        variant="simple"
                      >
                        {{ $form.lastName.error.message }}
                      </Message>
                    </div>
                  </div>

                  <div class="flex gap-4">
                    <div class="field w-1/2">
                      <label for="email" class="font-bold">Email Address</label>
                      <InputText
                        name="email"
                        v-model="wholesalerPersonalInfo.email"
                        type="email"
                        class="w-full"
                      />
                      <Message
                        v-if="$form.email?.invalid"
                        severity="error"
                        size="small"
                        variant="simple"
                      >
                        {{ $form.email.error.message }}
                      </Message>
                    </div>
                    <div class="field w-1/2">
                      <label for="email2" class="font-bold"
                        >Email Address 2</label
                      >
                      <InputText
                        name="email2"
                        v-model="wholesalerPersonalInfo.email2"
                        type="email"
                        class="w-full"
                      />
                      <Message
                        v-if="$form.email2?.invalid"
                        severity="error"
                        size="small"
                        variant="simple"
                      >
                        {{ $form.email2.error.message }}
                      </Message>
                    </div>
                  </div>

                  <div class="flex gap-4">
                    <div class="field w-1/2">
                      <label for="phoneNumber" class="font-bold"
                        >Phone Number 1</label
                      >
                      <InputText
                        name="phoneNumber"
                        v-model="wholesalerPersonalInfo.phoneNumber"
                        type="tel"
                        class="w-full"
                      />
                      <Message
                        v-if="$form.phoneNumber?.invalid"
                        severity="error"
                        size="small"
                        variant="simple"
                      >
                        {{ $form.phoneNumber.error.message }}
                      </Message>
                    </div>
                    <div class="field w-1/2">
                      <label for="phoneNumber2" class="font-bold"
                        >Phone Number 2</label
                      >
                      <InputText
                        name="phoneNumber2"
                        v-model="wholesalerPersonalInfo.phoneNumber2"
                        type="tel"
                        class="w-full"
                      />
                      <Message
                        v-if="$form.phoneNumber2?.invalid"
                        severity="error"
                        size="small"
                        variant="simple"
                      >
                        {{ $form.phoneNumber2.error.message }}
                      </Message>
                    </div>
                  </div>

                  <div class="flex gap-4">
                    <div class="field w-1/2">
                      <label for="address" class="font-bold"
                        >Business Address</label
                      >
                      <InputText
                        name="address"
                        v-model="wholesalerPersonalInfo.address"
                        type="text"
                        class="w-full"
                      />
                      <Message
                        v-if="$form.address?.invalid"
                        severity="error"
                        size="small"
                        variant="simple"
                      >
                        {{ $form.address.error.message }}
                      </Message>
                    </div>
                    <div class="field w-1/2">
                      <label for="password" class="font-bold">Password</label>
                      <InputText
                        name="password"
                        v-model="wholesalerPersonalInfo.password"
                        type="password"
                        class="w-full"
                      />
                      <Message
                        v-if="$form.password?.invalid"
                        severity="error"
                        size="small"
                        variant="simple"
                      >
                        {{ $form.password.error.message }}
                      </Message>
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
                      type="submit"
                    />
                  </div>
                </Form>
              </div>
            </StepPanel>

            <StepPanel
              v-slot="{ activateCallback }"
              :value="2"
              style="min-width: 40vw"
            >
              <div class="flex flex-col gap-4">
                <div class="text-center mt-4 mb-4 text-xl font-semibold">
                  Section 2: Business Details
                </div>

                <Form
                  v-slot="$form"
                  :initialValues="initialBusinessValues"
                  :resolver="businessResolver"
                  :validateOnValueUpdate="false"
                  :validateOnBlur="true"
                  class="flex-col gap-4"
                  @submit="(e) => validateAndProceed(e, activateCallback, 2)"
                >
                  <div>
                    <label class="font-bold py-5">
                      Which of the following describes your business well?
                    </label>
                    <div
                      v-for="type in businessTypes"
                      :key="type.key"
                      class="flex items-center gap-2"
                    >
                      <RadioButton
                        v-model="wholesalerBusinessInfo.selectedBusinessType"
                        :inputId="type.key"
                        name="businessType"
                        :value="type.name"
                      />
                      <label :for="type.key">{{ type.name }}</label>
                    </div>
                    <Message
                      v-if="$form.businessType?.invalid"
                      severity="error"
                      size="small"
                      variant="simple"
                    >
                      {{ $form.businessType.error.message }}
                    </Message>

                    <InputText
                      v-if="
                        wholesalerBusinessInfo.selectedBusinessType === 'Other'
                      "
                      v-model="wholesalerBusinessInfo.otherBrand"
                      type="text"
                      placeholder="Please Specify ..."
                      class="w-full mt-4"
                    />
                  </div>

                  <!-- Brands Dealt With -->
                  <div>
                    <label class="font-bold pb-3"
                      >Which brands do you deal with?</label
                    >
                    <div
                      v-for="brand in brandList"
                      :key="brand.key"
                      class="flex items-center gap-2"
                    >
                      <Checkbox
                        v-model="wholesalerBusinessInfo.selectedBrands"
                        :inputId="brand.key"
                        name="brands"
                        :value="brand.name"
                      />
                      <label :for="brand.key">{{ brand.name }}</label>
                    </div>
                    <Message
                      v-if="$form.brands?.invalid"
                      severity="error"
                      size="small"
                      variant="simple"
                    >
                      {{ $form.brands.error.message }}
                    </Message>

                    <InputText
                      v-if="
                        wholesalerBusinessInfo.selectedBrands.includes('Other')
                      "
                      v-model="wholesalerBusinessInfo.otherBrand"
                      type="text"
                      placeholder="Please Specify ..."
                      class="w-full mt-4"
                    />
                  </div>

                  <!-- Security Brand Strength -->
                  <div>
                    <label class="font-bold pb-3">
                      Which security brand do you have strength in?
                    </label>
                    <div
                      v-for="brand in securityBrands"
                      :key="brand.key"
                      class="flex items-center gap-2"
                    >
                      <Checkbox
                        v-model="wholesalerBusinessInfo.selectedSecurityBrands"
                        :inputId="brand.key"
                        name="securityBrands"
                        :value="brand.name"
                      />
                      <label :for="brand.key">{{ brand.name }}</label>
                    </div>
                    <Message
                      v-if="$form.securityBrands?.invalid"
                      severity="error"
                      size="small"
                      variant="simple"
                    >
                      {{ $form.securityBrands.error.message }}
                    </Message>
                  </div>

                  <!-- Navigation Buttons -->
                  <div class="flex pt-6 justify-between">
                    <Button
                      label="Back"
                      severity="secondary"
                      icon="pi pi-arrow-left"
                      type="submit"
                      @click="activateCallback(1)"
                    />
                    <Button
                      label="Next"
                      icon="pi pi-arrow-right"
                      iconPo="right"
                      type="submit"
                    />
                  </div>
                </Form>
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
                <!-- Product Categories (Checkboxes) -->
                <div>
                  <label class="font-bold pb-3">
                    Which product categories do you mostly deal with?
                  </label>
                  <div
                    v-for="category in productCategories"
                    :key="category.key"
                    class="flex items-center gap-2"
                  >
                    <Checkbox
                      v-model="wholesalerTechnicalInfo.selectedCategories"
                      :inputId="category.key"
                      name="wholesalerTechnicalInfo.selectedCategories"
                      :value="category.name"
                    />
                    <label :for="category.key">{{ category.name }}</label>
                  </div>
                </div>

                <!-- Challenges with Hikvision (Textarea) -->
                <div>
                  <label class="font-bold pb-3"
                    >What are the challenges you have faced when dealing with
                    Hikvision?</label
                  >
                  <Textarea
                    v-model="wholesalerTechnicalInfo.hikvisionChallenges"
                    rows="4"
                    class="w-full"
                    placeholder="Describe challenges..."
                  />
                </div>

                <!-- Advice to Secure Digital Limited (Textarea) -->
                <div>
                  <label class="font-bold pb-3"
                    >What would be your advice to Secure Digital Limited?</label
                  >
                  <Textarea
                    v-model="wholesalerTechnicalInfo.adviceToSecureDigital"
                    rows="4"
                    class="w-full"
                    placeholder="Share your advice..."
                  />
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
                  @click="handleSubmit(activateCallback, 4)"
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
        :autoplayInterval="4000"
        :value="images"
        :numVisible="1"
        :numScroll="1"
        :showIndicators="false"
        :showNavigators="false"
        circular
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
    <Toast position="bottom-right" group="br" />
  </div>
</template>

<script>
import Toast from "primevue/toast";

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
        password: "",
      },
      initialValues: {
        companyName: "",
        firstName: "",
        lastName: "",
        email: "",
        email2: "",
        phoneNumber: "",
        phoneNumber2: "",
        address: "",
        password: "",
      },
      initialBusinessValues: {
        selectedBusinessType: "",
        selectedBrands: [],
        selectedSecurityBrands: [],
        otherBrand: "",
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
        otherBrand: "",
      },
      errors: {
        wholesalerPersonalInfo: {
          companyName: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          email2: "",
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
        { key: "other", name: "Other" },
      ],
      selectedBrands: [],
      brandList: [
        { key: "hikvision", name: "HIKVISION" },
        { key: "dahua", name: "DAHUA" },
        { key: "uniview", name: "UNIVIEW" },
        { key: "axis", name: "AXIS" },
        { key: "zkteco", name: "ZKTECO" },
        { key: "other", name: "Other" },
      ],
      selectedSecurityBrands: [],
      securityBrands: [
        { key: "hikvision", name: "HIKVISION" },
        { key: "dahua", name: "DAHUA" },
        { key: "uniview", name: "UNIVIEW" },
        { key: "axis", name: "AXIS" },
        { key: "zkteco", name: "ZKTECO" },
        { key: "other", name: "Other" },
      ],
      selectedCategories: [],
      productCategories: [
        { key: "analogue_cctv", name: "ANALOGUE CCTV/ DVR" },
        { key: "network_cctv", name: "NETWORK (IP) CCTV /NVR" },
        { key: "intercoms", name: "INTERCOMS" },
        { key: "access_control", name: "ACCESS CONTROL" },
        { key: "other", name: "Other" },
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
  methods: {
    resolver({ values }) {
      const errors = {};

      const requiredFields = [
        "companyName",
        "firstName",
        "lastName",
        "email",
        "email2",
        "phoneNumber",
        "phoneNumber2",
        "address",
        "password",
      ];

      for (const field of requiredFields) {
        if (!values[field]) {
          errors[field] = [
            { message: `${this.toTitleCase(field)} is required.` },
          ];
        }
      }

      return { errors };
    },
    businessResolver({ values }) {
      const errors = {};

      if (!values.selectedBusinessType) {
        errors.selectedBusinessType = {
          message: "Business type is required.",
        };
      }

      if (!values.selectedBrands || values.selectedBrands.length === 0) {
        errors.selectedBrands = {
          message: "At least one brand is required.",
        };
      }

      if (
        !values.selectedSecurityBrands ||
        values.selectedSecurityBrands.length === 0
      ) {
        errors.selectedSecurityBrands = {
          message: "At least one security brand is required.",
        };
      }

      return { errors };
    },
    toTitleCase(str) {
      return str
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (s) => s.toUpperCase());
    },

    async handleSubmit(activateCallback, x) {
      const data = {
        ...this.wholesalerPersonalInfo,
        ...this.wholesalerBusinessInfo,
        ...this.wholesalerTechnicalInfo,
      };
      if (this.validateForm()) {
        this.formData = data;
        await this.submitForm(activateCallback);
      } else {
        console.log("Validation failed");
      }
    },
    validateForm() {
      let isValid = true;
      this.errors = {};
      return isValid;
    },
    hasErrors(obj) {
      return Object.values(obj).some((value) => {
        if (typeof value === "object") {
          return this.hasErrors(value);
        }
        return value !== "";
      });
    },

    validateAndProceed(formContext, activateCallback, currentStep) {
      console.log("Validating step", formContext.valid);
      console.log("Current step:", activateCallback);
      console.log("Current currentStep:", currentStep);
      // formContext.validate().then(({ valid }) => {
      if (formContext.valid) {
        console.log("Moving to step", currentStep + 1);
        activateCallback(currentStep + 1);
      } else {
        console.log("Validation errors:", formContext.errors);
      }
      // });

      // if (x == 1) {
      //   if (!this.wholesalerPersonalInfo.companyName)
      //     this.errors.wholesalerPersonalInfo.companyName =
      //       "Company name is required.";
      //   if (!this.wholesalerPersonalInfo.firstName)
      //     this.errors.wholesalerPersonalInfo.firstName =
      //       "First name is required.";
      //   if (!this.wholesalerPersonalInfo.lastName)
      //     this.errors.wholesalerPersonalInfo.lastName =
      //       "Last name is required.";
      //   if (!this.wholesalerPersonalInfo.phoneNumber)
      //     this.errors.wholesalerPersonalInfo.phoneNumber =
      //       "Phone number is required.";
      //   if (!this.wholesalerPersonalInfo.email)
      //     this.errors.wholesalerPersonalInfo.email =
      //       "Email address is required.";
      //   if (!this.wholesalerPersonalInfo.address)
      //     this.errors.wholesalerPersonalInfo.address =
      //       "Business address is required.";

      //   if (!this.hasErrors(this.errors)) {
      //     activateCallback(2);
      //   }
      // }
      // if (x == 2) {
      //   // Validate Checkboxes
      //   if (this.wholesalerBusinessInfo.selectedBusinessType.length === 0) {
      //     this.errors.wholesalerBusinessInfo.selectedBusinessType =
      //       "Business type is required.";
      //   }
      //   if (this.wholesalerBusinessInfo.selectedBrands.length === 0) {
      //     this.errors.wholesalerBusinessInfo.selectedBrands =
      //       "At least one brand is required.";
      //   }
      //   if (this.wholesalerBusinessInfo.selectedSecurityBrands.length === 0) {
      //     this.errors.wholesalerBusinessInfo.selectedSecurityBrands =
      //       "At least one security brand is required.";
      //   }
      //   // Validate Radio Buttons
      //   if (!this.integrationExperience) {
      //     this.integrationExperienceError = true;
      //   }
      //   if (!this.familiarWithStandard) {
      //     this.familiarWithStandardError = true;
      //   }

      //   // Proceed to the next step if no errors
      //   if (
      //     !this.selectedBrandsError &&
      //     !this.selectedBusinessTypeErrors &&
      //     !this.selectedSecurityBrandsError
      //     // !this.selected
      //   ) {
      //     activateCallback(3);
      //   }
      // }
    },
    async submitForm(activateCallback) {
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

      try {
        // Make POST request to the backend API
        const { $axios } = useNuxtApp();

        const response = await $axios.post(
          "/user/shop-owners-questionnaire",
          this.formData
        );
        // Handle success
        this.responseMessage = response.data.message;
        toast.add({
          severity: "success",
          summary: response.data.message,
          group: "br",
          life: 3000,
        });
        // activateCallback(4);
        if (response.status === 200) {
          activateCallback(4);
        }
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: error.message,
          group: "br",
          life: 3000,
        });
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
      this.address;
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
