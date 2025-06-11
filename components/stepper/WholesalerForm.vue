<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    style="
      background-image: url('https://www.sdl.co.ke/assets/images/icons/vector-1.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    "
  >
    <!-- Header with Back Button -->
    <div class="relative w-full pb-16">
      <div class="absolute top-4 left-4 z-10">
        <Button
          @click="$emit('back-to-signup')"
          severity="secondary"
          text
          class="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-200"
        >
          <i class="pi pi-arrow-left"></i>
          <span class="hidden sm:inline">Back to Signup</span>
        </Button>
      </div>
    </div>

    <div class="flex min-h-screen">
      <!-- Main Form Section -->
      <div class="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div class="w-full max-w-4xl">
          <!-- Form Card -->
          <div
            class="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-2xl rounded-2xl overflow-hidden"
          >
            <!-- Header -->
            <div
              class="bg-gradient-to-r from-primary to-orange-600 text-white p-6"
            >
              <h1 class="text-2xl sm:text-3xl font-bold text-center">
                Wholesaler Partner Registration
              </h1>
              <p class="text-center mt-2 text-blue-100">
                Join our network to access exclusive pricing and resources
              </p>
            </div>

            <!-- Stepper Content -->
            <div class="p-6 sm:p-8">
              <Stepper v-model:value="activeStep" class="w-full">
                <!-- Step Headers -->
                <StepList class="mb-8">
                  <Step
                    v-for="(step, index) in steps"
                    :key="step.value"
                    v-slot="{ activateCallback, value, a11yAttrs }"
                    asChild
                    :value="step.value"
                  >
                    <div
                      class="flex flex-row flex-auto gap-2"
                      v-bind="a11yAttrs.root"
                    >
                      <button
                        class="bg-transparent border-0 inline-flex flex-col gap-2 items-center min-w-0"
                        @click="activateCallback"
                        v-bind="a11yAttrs.header"
                      >
                        <span
                          :class="[
                            'rounded-full border-2 w-12 h-12 sm:w-14 sm:h-14 inline-flex items-center justify-center transition-all duration-300',
                            {
                              'bg-primary text-white border-primary shadow-lg':
                                value <= activeStep,
                              'border-gray-300 text-gray-400 hover:border-gray-400':
                                value > activeStep,
                            },
                          ]"
                        >
                          <i :class="step.icon" class="text-lg sm:text-xl" />
                        </span>
                        <span
                          class="text-xs sm:text-sm font-medium text-center max-w-20 sm:max-w-none"
                          :class="{
                            'text-primary': value <= activeStep,
                            'text-gray-500': value > activeStep,
                          }"
                        >
                          {{ step.title }}
                        </span>
                      </button>
                      <Divider
                        v-if="index < steps.length - 1"
                        class="flex-1 mt-6"
                      />
                    </div>
                  </Step>
                </StepList>

                <!-- Step Panels -->
                <StepPanels>
                  <!-- Step 1: Personal Information -->
                  <StepPanel v-slot="{ activateCallback }" :value="1">
                    <div class="space-y-">
                      <div class="text-center">
                        <h2 class="text-2xl font-bold text-gray-900 b-2">
                          Personal Information
                        </h2>
                        <p class="text-gray-600">
                          Tell us about your company and contact details
                        </p>
                      </div>

                      <Form
                        v-slot="$form"
                        :initialValues="initialValues"
                        :resolver="resolver"
                        :validateOnValueUpdate="false"
                        :validateOnBlur="true"
                        class="space-y-2"
                        @submit="
                          (e) => validateAndProceed(e, activateCallback, 1)
                        "
                      >
                        <!-- Company Name -->
                        <div class="space-y-2">
                          <label
                            for="companyName"
                            class="block text-sm font-semibold text-gray-700"
                          >
                            Company Name *
                          </label>
                          <InputText
                            name="companyName"
                            v-model="wholesalerPersonalInfo.companyName"
                            placeholder="Enter your full company name"
                            class="w-full"
                            :class="{ 'p-invalid': $form.companyName?.invalid }"
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

                        <!-- Name Fields -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div class="space-y-2">
                            <label
                              for="firstName"
                              class="block text-sm font-semibold text-gray-700"
                            >
                              First Name *
                            </label>
                            <InputText
                              name="firstName"
                              v-model="wholesalerPersonalInfo.firstName"
                              placeholder="First name"
                              class="w-full"
                              :class="{ 'p-invalid': $form.firstName?.invalid }"
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
                          <div class="space-y-2">
                            <label
                              for="lastName"
                              class="block text-sm font-semibold text-gray-700"
                            >
                              Last Name *
                            </label>
                            <InputText
                              name="lastName"
                              v-model="wholesalerPersonalInfo.lastName"
                              placeholder="Last name"
                              class="w-full"
                              :class="{ 'p-invalid': $form.lastName?.invalid }"
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

                        <!-- Email Fields -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div class="space-y-2">
                            <label
                              for="email"
                              class="block text-sm font-semibold text-gray-700"
                            >
                              Primary Email *
                            </label>
                            <InputText
                              name="email"
                              v-model="wholesalerPersonalInfo.email"
                              type="email"
                              placeholder="primary@company.com"
                              class="w-full"
                              :class="{ 'p-invalid': $form.email?.invalid }"
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
                          <div class="space-y-2">
                            <label
                              for="email2"
                              class="block text-sm font-semibold text-gray-700"
                            >
                              Secondary Email
                            </label>
                            <InputText
                              name="email2"
                              v-model="wholesalerPersonalInfo.email2"
                              type="email"
                              placeholder="secondary@company.com"
                              class="w-full"
                              :class="{ 'p-invalid': $form.email2?.invalid }"
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

                        <!-- Phone Fields -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div class="space-y-2">
                            <label
                              for="phoneNumber"
                              class="block text-sm font-semibold text-gray-700"
                            >
                              Primary Phone *
                            </label>
                            <InputText
                              name="phoneNumber"
                              v-model="wholesalerPersonalInfo.phoneNumber"
                              type="tel"
                              placeholder="+254 xxx xxx xxx"
                              class="w-full"
                              :class="{
                                'p-invalid': $form.phoneNumber?.invalid,
                              }"
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
                          <div class="space-y-2">
                            <label
                              for="phoneNumber2"
                              class="block text-sm font-semibold text-gray-700"
                            >
                              Secondary Phone
                            </label>
                            <InputText
                              name="phoneNumber2"
                              v-model="wholesalerPersonalInfo.phoneNumber2"
                              type="tel"
                              placeholder="+254 xxx xxx xxx"
                              class="w-full"
                              :class="{
                                'p-invalid': $form.phoneNumber2?.invalid,
                              }"
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

                        <!-- Address and Password -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div class="space-y-2">
                            <label
                              for="address"
                              class="block text-sm font-semibold text-gray-700"
                            >
                              Business Address *
                            </label>
                            <InputText
                              name="address"
                              v-model="wholesalerPersonalInfo.address"
                              placeholder="Your business address"
                              class="w-full"
                              :class="{ 'p-invalid': $form.address?.invalid }"
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
                          <div class="space-y-2">
                            <label
                              for="password"
                              class="block text-sm font-semibold text-gray-700"
                            >
                              Password *
                            </label>
                            <InputText
                              name="password"
                              v-model="wholesalerPersonalInfo.password"
                              type="password"
                              placeholder="Create a secure password"
                              class="w-full"
                              :class="{ 'p-invalid': $form.password?.invalid }"
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

                        <!-- Navigation -->
                        <div class="flex justify-end pt-6">
                          <Button
                            label="Next"
                            icon="pi pi-arrow-right"
                            iconPos="right"
                            type="submit"
                            class="px-8"
                          />
                        </div>
                      </Form>
                    </div>
                  </StepPanel>

                  <!-- Step 2: Business Details -->
                  <StepPanel v-slot="{ activateCallback }" :value="2">
                    <div class="space-y-6">
                      <div class="text-center">
                        <h2 class="text-2xl font-bold text-gray-900 mb-2">
                          Business Details
                        </h2>
                        <p class="text-gray-600">
                          Tell us about your business operations and
                          partnerships
                        </p>
                      </div>

                      <Form
                        v-slot="$form"
                        :initialValues="initialBusinessValues"
                        :resolver="businessResolver"
                        :validateOnValueUpdate="false"
                        :validateOnBlur="true"
                        class="space-y-8"
                        @submit="
                          (e) => validateAndProceed(e, activateCallback, 2)
                        "
                      >
                        <!-- Business Type -->
                        <div class="space-y-4">
                          <label
                            class="block text-lg font-semibold text-gray-900"
                          >
                            Which of the following describes your business well?
                            *
                          </label>
                          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div
                              v-for="type in businessTypes"
                              :key="type.key"
                              class="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <RadioButton
                                v-model="
                                  wholesalerBusinessInfo.selectedBusinessType
                                "
                                :inputId="type.key"
                                name="businessType"
                                :value="type.name"
                                class="mr-3"
                              />
                              <label
                                :for="type.key"
                                class="text-sm font-medium cursor-pointer flex-1"
                              >
                                {{ type.name }}
                              </label>
                            </div>
                          </div>
                          <InputText
                            v-if="
                              wholesalerBusinessInfo.selectedBusinessType ===
                              'Other'
                            "
                            v-model="wholesalerBusinessInfo.otherBrand"
                            placeholder="Please specify..."
                            class="w-full mt-3"
                          />
                        </div>

                        <!-- Brands -->
                        <div class="space-y-4">
                          <label
                            class="block text-lg font-semibold text-gray-900"
                          >
                            Which brands do you deal with? *
                          </label>
                          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            <div
                              v-for="brand in brandList"
                              :key="brand.key"
                              class="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <Checkbox
                                v-model="wholesalerBusinessInfo.selectedBrands"
                                :inputId="brand.key"
                                name="brands"
                                :value="brand.name"
                                class="mr-3"
                              />
                              <label
                                :for="brand.key"
                                class="text-sm font-medium cursor-pointer"
                              >
                                {{ brand.name }}
                              </label>
                            </div>
                          </div>
                          <InputText
                            v-if="
                              wholesalerBusinessInfo.selectedBrands.includes(
                                'Other'
                              )
                            "
                            v-model="wholesalerBusinessInfo.otherBrand"
                            placeholder="Please specify other brands..."
                            class="w-full"
                          />
                        </div>

                        <!-- Security Brands -->
                        <div class="space-y-4">
                          <label
                            class="block text-lg font-semibold text-gray-900"
                          >
                            Which security brand do you have strength in? *
                          </label>
                          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            <div
                              v-for="brand in securityBrands"
                              :key="brand.key"
                              class="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <Checkbox
                                v-model="
                                  wholesalerBusinessInfo.selectedSecurityBrands
                                "
                                :inputId="brand.key"
                                name="securityBrands"
                                :value="brand.name"
                                class="mr-3"
                              />
                              <label
                                :for="brand.key"
                                class="text-sm font-medium cursor-pointer"
                              >
                                {{ brand.name }}
                              </label>
                            </div>
                          </div>
                        </div>

                        <!-- Navigation -->
                        <div class="flex justify-between pt-6">
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
                            type="submit"
                          />
                        </div>
                      </Form>
                    </div>
                  </StepPanel>

                  <!-- Step 3: Technical Questions -->
                  <StepPanel v-slot="{ activateCallback }" :value="3">
                    <div class="space-y-6">
                      <div class="text-center">
                        <h2 class="text-2xl font-bold text-gray-900 mb-2">
                          Technical Questions
                        </h2>
                        <p class="text-gray-600">
                          Help us understand your technical needs and challenges
                        </p>
                      </div>

                      <!-- Product Categories -->
                      <div class="space-y-4">
                        <label
                          class="block text-lg font-semibold text-gray-900"
                        >
                          Which product categories do you mostly deal with?
                        </label>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div
                            v-for="category in productCategories"
                            :key="category.key"
                            class="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <Checkbox
                              v-model="
                                wholesalerTechnicalInfo.selectedCategories
                              "
                              :inputId="category.key"
                              name="categories"
                              :value="category.name"
                              class="mr-3"
                            />
                            <label
                              :for="category.key"
                              class="text-sm font-medium cursor-pointer flex-1"
                            >
                              {{ category.name }}
                            </label>
                          </div>
                        </div>
                      </div>

                      <!-- Challenges -->
                      <div class="space-y-3">
                        <label
                          class="block text-lg font-semibold text-gray-900"
                        >
                          What are the challenges you have faced when dealing
                          with Hikvision?
                        </label>
                        <Textarea
                          v-model="wholesalerTechnicalInfo.hikvisionChallenges"
                          rows="4"
                          class="w-full"
                          placeholder="Please describe any challenges you've encountered..."
                        />
                      </div>

                      <!-- Advice -->
                      <div class="space-y-3">
                        <label
                          class="block text-lg font-semibold text-gray-900"
                        >
                          What would be your advice to Secure Digital Limited?
                        </label>
                        <Textarea
                          v-model="
                            wholesalerTechnicalInfo.adviceToSecureDigital
                          "
                          rows="4"
                          class="w-full"
                          placeholder="Share your advice and suggestions..."
                        />
                      </div>

                      <!-- Navigation -->
                      <div class="flex justify-between pt-6">
                        <Button
                          label="Back"
                          severity="secondary"
                          icon="pi pi-arrow-left"
                          @click="activateCallback(2)"
                        />
                        <Button
                          label="Submit Application"
                          icon="pi pi-check"
                          iconPos="right"
                          @click="handleSubmit(activateCallback, 4)"
                          :loading="submitting"
                        />
                      </div>
                    </div>
                  </StepPanel>

                  <!-- Step 4: Success -->
                  <StepPanel v-slot="{ activateCallback }" :value="4">
                    <div class="text-center space-y-6">
                      <div
                        class="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center"
                      >
                        <i class="pi pi-check text-3xl text-green-600"></i>
                      </div>

                      <div>
                        <h2 class="text-3xl font-bold text-gray-900 mb-4">
                          Application Submitted Successfully!
                        </h2>
                        <p class="text-lg text-gray-600 mb-6">
                          Thank you for your interest in becoming a wholesaler
                          partner.
                        </p>
                      </div>

                      <div class="bg-blue-50 rounded-xl p-6 text-left">
                        <h3 class="text-xl font-semibold text-gray-900 mb-4">
                          What happens next?
                        </h3>
                        <p class="text-gray-700 mb-4">
                          Your application will undergo a thorough review. Upon
                          successful verification, you will gain access to:
                        </p>
                        <ul class="space-y-2 text-gray-700">
                          <li class="flex items-start">
                            <i
                              class="pi pi-check-circle text-green-600 mr-2 mt-1"
                            ></i>
                            <span
                              ><strong>Reseller Pricing</strong> - Access to
                              wholesale rates</span
                            >
                          </li>
                          <li class="flex items-start">
                            <i
                              class="pi pi-check-circle text-green-600 mr-2 mt-1"
                            ></i>
                            <span
                              ><strong>Marketing Resources</strong> -
                              Comprehensive promotional materials</span
                            >
                          </li>
                          <li class="flex items-start">
                            <i
                              class="pi pi-check-circle text-green-600 mr-2 mt-1"
                            ></i>
                            <span
                              ><strong>Technical Support</strong> - Dedicated
                              technical assistance</span
                            >
                          </li>
                          <li class="flex items-start">
                            <i
                              class="pi pi-check-circle text-green-600 mr-2 mt-1"
                            ></i>
                            <span
                              ><strong>Business Support</strong> - Ongoing
                              partnership support</span
                            >
                          </li>
                        </ul>
                      </div>

                      <div
                        class="bg-white border border-gray-200 rounded-xl p-6"
                      >
                        <h3 class="text-lg font-semibold text-gray-900 mb-4">
                          Need assistance? Contact us:
                        </h3>
                        <div class="space-y-3">
                          <div class="flex items-center justify-center gap-2">
                            <i class="pi pi-envelope text-blue-600"></i>
                            <a
                              href="mailto:sdl@hikvisionkenya.com"
                              class="text-blue-600 hover:underline font-medium"
                            >
                              sdl@hikvisionkenya.com
                            </a>
                          </div>
                          <div class="flex items-center justify-center gap-2">
                            <i class="pi pi-phone text-blue-600"></i>
                            <a
                              href="tel:+254727909060"
                              class="text-blue-600 hover:underline font-medium"
                            >
                              +254 727 909 060
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="border-t pt-6">
                        <p class="text-sm text-gray-500">
                          <strong
                            >Secure Digital Limited | Hik Digital Mart
                            Limited</strong
                          ><br />
                          SDLKenya Online Shop Administration Department
                        </p>
                      </div>
                    </div>
                  </StepPanel>
                </StepPanels>
              </Stepper>
            </div>
          </div>
        </div>
      </div>

      <!-- Side Image Carousel (Hidden on Mobile) -->
      <div class="hidden lg:block w-1/3 xl:w-2/5 relative">
        <Carousel
          :verticalViewPortHeight="'100vh'"
          :autoplayInterval="4000"
          :value="images"
          :numVisible="1"
          :numScroll="1"
          :showIndicators="false"
          :showNavigators="false"
          circular
          class="h-full"
        >
          <template #item="slotProps">
            <div
              class="relative w-full h-screen flex items-center justify-center overflow-hidden pa-4"
            >
              <img
                :src="slotProps.data.src"
                :alt="slotProps.data.alt"
                class="object-cover"
              />
              <div class="absolut"></div>
              <div class="absolute bottom-8 left-8 right-8 text-white">
                <h3 class="text-xl font-bold mb-2">
                  {{ slotProps.data.title }}
                </h3>
                <p class="text-sm opacity-90">{{ slotProps.data.alt }}</p>
              </div>
            </div>
          </template>
        </Carousel>
      </div>
    </div>
    <Toast position="bottom-right" group="br" />
  </div>
</template>

<script>
import Toast from "primevue/toast";
// import Form from "primevue/form"; // if it exists in your version

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
        console.log(error);
        this.$toast.add({
          severity: "error",
          summary: error.response?.data?.message || "An error occurred",
          group: "br",
          life: 3000,
        });

        toast.add({
          severity: "error",
          detail: error.response?.data?.message || "An error occurred",
          summary: response.data.message,
          group: "br",
          life: 3000,
        });
      } finally {
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
