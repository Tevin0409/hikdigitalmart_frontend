<template>
  <div
    class="min-h flex w- align-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    style="
      background-image: url('https://www.sdl.co.ke/assets/images/icons/vector-1.png');
      background-size: cover;
      background-position: center;
    "
  >
    <!-- Main Content Container -->
    <div class="flex w-full flex-col items-center justify-center px-4 py-8">
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

      <!-- Enhanced Main Card -->
      <div class="w-full max-w-5xl mt-20">
        <div
          class="bg-white/95 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 lg:p-12 relative overflow-hidden"
        >
          <!-- Decorative Elements -->
          <div
            class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full translate-y-12 -translate-x-12"
          ></div>

          <!-- Header -->
          <div class="text-center mb-8">
            <h1
              class="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3"
            >
              Partner Registration
            </h1>
            <p class="text-gray-600 text-lg">
              Join our network of trusted security professionals
            </p>
          </div>

          <Stepper v-model:value="activeStep" class="relative">
            <!-- Enhanced Step List -->
            <StepList class="mb-8">
              <Step
                v-slot="{ activateCallback, value, a11yAttrs }"
                asChild
                :value="1"
              >
                <div
                  class="flex flex-row flex-auto gap-2 items-center"
                  v-bind="a11yAttrs.root"
                >
                  <button
                    class="bg-transparent border-0 inline-flex flex-col gap-3 items-center transition-all duration-300 hover:scale-105"
                    @click="activateCallback"
                    v-bind="a11yAttrs.header"
                  >
                    <span
                      :class="[
                        'rounded-full border-2 w-14 h-14 inline-flex items-center justify-center text-lg font-semibold transition-all duration-300 shadow-lg',
                        {
                          'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-transparent shadow-indigo-200':
                            value <= activeStep,
                          'border-gray-300 bg-white text-gray-400 hover:border-indigo-300':
                            value > activeStep,
                        },
                      ]"
                    >
                      <i class="pi pi-building text-xl" />
                    </span>
                    <span
                      class="text-sm font-medium text-gray-600 hidden sm:block"
                      >Business Info</span
                    >
                  </button>
                  <Divider class="flex-1 mx-4" />
                </div>
              </Step>

              <Step
                v-slot="{ activateCallback, value, a11yAttrs }"
                asChild
                :value="2"
              >
                <div
                  class="flex flex-row flex-auto gap-2 items-center pl-2"
                  v-bind="a11yAttrs.root"
                >
                  <button
                    class="bg-transparent border-0 inline-flex flex-col gap-3 items-center transition-all duration-300 hover:scale-105"
                    @click="activateCallback"
                    v-bind="a11yAttrs.header"
                  >
                    <span
                      :class="[
                        'rounded-full border-2 w-14 h-14 inline-flex items-center justify-center text-lg font-semibold transition-all duration-300 shadow-lg',
                        {
                          'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-transparent shadow-indigo-200':
                            value <= activeStep,
                          'border-gray-300 bg-white text-gray-400 hover:border-indigo-300':
                            value > activeStep,
                        },
                      ]"
                    >
                      <i class="pi pi-cog text-xl" />
                    </span>
                    <span
                      class="text-sm font-medium text-gray-600 hidden sm:block"
                      >Experience</span
                    >
                  </button>
                  <Divider class="flex-1 mx-4" />
                </div>
              </Step>

              <Step
                v-slot="{ activateCallback, value, a11yAttrs }"
                asChild
                :value="3"
              >
                <div
                  class="flex flex-row flex-auto gap-2 items-center pl-2"
                  v-bind="a11yAttrs.root"
                >
                  <button
                    class="bg-transparent border-0 inline-flex flex-col gap-3 items-center transition-all duration-300 hover:scale-105"
                    @click="activateCallback"
                    v-bind="a11yAttrs.header"
                  >
                    <span
                      :class="[
                        'rounded-full border-2 w-14 h-14 inline-flex items-center justify-center text-lg font-semibold transition-all duration-300 shadow-lg',
                        {
                          'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-transparent shadow-indigo-200':
                            value <= activeStep,
                          'border-gray-300 bg-white text-gray-400 hover:border-indigo-300':
                            value > activeStep,
                        },
                      ]"
                    >
                      <i class="pi pi-question-circle text-xl" />
                    </span>
                    <span
                      class="text-sm font-medium text-gray-600 hidden sm:block"
                      >Questions</span
                    >
                  </button>
                  <Divider class="flex-1 mx-4" />
                </div>
              </Step>

              <Step
                v-slot="{ activateCallback, value, a11yAttrs }"
                asChild
                :value="4"
              >
                <div
                  class="flex flex-row items-center pl-2"
                  v-bind="a11yAttrs.root"
                >
                  <button
                    class="bg-transparent border-0 inline-flex flex-col gap-3 items-center transition-all duration-300 hover:scale-105"
                    @click="activateCallback"
                    v-bind="a11yAttrs.header"
                  >
                    <span
                      :class="[
                        'rounded-full border-2 w-14 h-14 inline-flex items-center justify-center text-lg font-semibold transition-all duration-300 shadow-lg',
                        {
                          'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-transparent shadow-green-200':
                            value <= activeStep,
                          'border-gray-300 bg-white text-gray-400 hover:border-indigo-300':
                            value > activeStep,
                        },
                      ]"
                    >
                      <i class="pi pi-check-circle text-xl" />
                    </span>
                    <span
                      class="text-sm font-medium text-gray-600 hidden sm:block"
                      >Complete</span
                    >
                  </button>
                </div>
              </Step>
            </StepList>

            <StepPanels>
              <!-- Step 1: Business Identification -->
              <StepPanel v-slot="{ activateCallback }" :value="1">
                <div class="space-y-6">
                  <div class="text-center mb-8">
                    <h2 class="text-2xl font-bold text-gray-800 mb-2">
                      Business Identification
                    </h2>
                    <p class="text-gray-600">
                      Tell us about your business and experience
                    </p>
                  </div>

                  <!-- Personal Information Card -->
                  <div
                    class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100"
                  >
                    <h3
                      class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2"
                    >
                      <i class="pi pi-user text-indigo-600"></i>
                      Personal Information
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div class="space-y-2">
                        <label
                          for="firstName"
                          class="font-semibold text-gray-700"
                          >First Name</label
                        >
                        <InputText
                          id="firstName"
                          v-model="firstName"
                          type="text"
                          placeholder="Enter first name"
                          class="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-indigo-400 transition-colors"
                        />
                        <small
                          v-if="errors.firstName"
                          class="text-red-500 flex items-center gap-1"
                        >
                          <i class="pi pi-exclamation-triangle"></i>
                          {{ errors.firstName }}
                        </small>
                      </div>

                      <div class="space-y-2">
                        <label
                          for="lastName"
                          class="font-semibold text-gray-700"
                          >Last Name</label
                        >
                        <InputText
                          id="lastName"
                          v-model="lastName"
                          type="text"
                          placeholder="Enter last name"
                          class="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-indigo-400 transition-colors"
                        />
                        <small
                          v-if="errors.lastName"
                          class="text-red-500 flex items-center gap-1"
                        >
                          <i class="pi pi-exclamation-triangle"></i>
                          {{ errors.lastName }}
                        </small>
                      </div>

                      <div class="space-y-2">
                        <label
                          for="phoneNumber"
                          class="font-semibold text-gray-700"
                          >Phone Number</label
                        >
                        <InputText
                          id="phoneNumber"
                          v-model="phoneNumber"
                          type="tel"
                          placeholder="Enter phone number"
                          class="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-indigo-400 transition-colors"
                        />
                        <small
                          v-if="errors.phoneNumber"
                          class="text-red-500 flex items-center gap-1"
                        >
                          <i class="pi pi-exclamation-triangle"></i>
                          {{ errors.phoneNumber }}
                        </small>
                      </div>

                      <div class="space-y-2">
                        <label for="email" class="font-semibold text-gray-700"
                          >Email Address</label
                        >
                        <InputText
                          id="email"
                          v-model="email"
                          type="email"
                          placeholder="Enter email address"
                          class="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-indigo-400 transition-colors"
                        />
                        <small
                          v-if="errors.email"
                          class="text-red-500 flex items-center gap-1"
                        >
                          <i class="pi pi-exclamation-triangle"></i>
                          {{ errors.email }}
                        </small>
                      </div>
                      <div class="space-y-2">
                        <label for="email" class="font-semibold text-gray-700"
                          >Password</label
                        >
                        <InputText
                          id="password"
                          v-model="password"
                          type="email"
                          placeholder="Enter password"
                          class="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-indigo-400 transition-colors"
                        />
                        <small
                          v-if="errors.password"
                          class="text-red-500 flex items-center gap-1"
                        >
                          <i class="pi pi-exclamation-triangle"></i>
                          {{ errors.password }}
                        </small>
                      </div>
                    </div>
                  </div>

                  <!-- Business Information Card -->
                  <div
                    class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100"
                  >
                    <h3
                      class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2"
                    >
                      <i class="pi pi-building text-purple-600"></i>
                      Business Information
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div class="space-y-2">
                        <label
                          for="businessName"
                          class="font-semibold text-gray-700"
                          >Business/Company Name</label
                        >
                        <InputText
                          id="businessName"
                          v-model="businessName"
                          type="text"
                          placeholder="Enter business name"
                          class="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-purple-400 transition-colors"
                        />
                        <small
                          v-if="errors.businessName"
                          class="text-red-500 flex items-center gap-1"
                        >
                          <i class="pi pi-exclamation-triangle"></i>
                          {{ errors.businessName }}
                        </small>
                      </div>

                      <div class="space-y-2">
                        <label
                          for="location"
                          class="font-semibold text-gray-700"
                          >Business Location</label
                        >
                        <InputText
                          id="location"
                          v-model="location"
                          type="text"
                          placeholder="City, State, Country"
                          class="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-purple-400 transition-colors"
                        />
                        <small
                          v-if="errors.location"
                          class="text-red-500 flex items-center gap-1"
                        >
                          <i class="pi pi-exclamation-triangle"></i>
                          {{ errors.location }}
                        </small>
                      </div>
                    </div>

                    <!-- Business Type -->
                    <div class="space-y-4">
                      <h4 class="font-semibold text-gray-700">Business Type</h4>
                      <div
                        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
                      >
                        <div
                          v-for="category in businessCategories"
                          :key="category.key"
                          class="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 hover:border-purple-300 transition-colors cursor-pointer"
                          @click="businessType = category.key"
                        >
                          <RadioButton
                            v-model="businessType"
                            :inputId="category.key"
                            name="businessType"
                            :value="category.key"
                            class="text-purple-600"
                          />
                          <label
                            :for="category.key"
                            class="cursor-pointer font-medium"
                            >{{ category.name }}</label
                          >
                        </div>
                      </div>
                      <small
                        v-if="errors.businessType"
                        class="text-red-500 flex items-center gap-1"
                      >
                        <i class="pi pi-exclamation-triangle"></i>
                        {{ errors.businessType }}
                      </small>
                    </div>

                    <!-- Years of Experience -->
                    <div class="space-y-4 mt-6">
                      <h4 class="font-semibold text-gray-700">
                        Years of Experience
                      </h4>
                      <div
                        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
                      >
                        <div
                          v-for="category in yearExperiences"
                          :key="category.key"
                          class="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 hover:border-purple-300 transition-colors cursor-pointer"
                          @click="experienceYears = category.key"
                        >
                          <RadioButton
                            v-model="experienceYears"
                            :inputId="category.key"
                            name="experienceYears"
                            :value="category.key"
                            class="text-purple-600"
                          />
                          <label
                            :for="category.key"
                            class="cursor-pointer font-medium"
                            >{{ category.name }}</label
                          >
                        </div>
                      </div>
                      <small
                        v-if="errors.experienceYears"
                        class="text-red-500 flex items-center gap-1"
                      >
                        <i class="pi pi-exclamation-triangle"></i>
                        {{ errors.experienceYears }}
                      </small>
                    </div>
                  </div>
                </div>

                <div class="flex pt-8 justify-end">
                  <Button
                    label="Continue"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    class="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 border-0 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    @click="validateAndProceed(activateCallback, 1)"
                  />
                </div>
              </StepPanel>

              <!-- Step 2: Technical Experience -->
              <StepPanel v-slot="{ activateCallback }" :value="2">
                <div class="space-y-6">
                  <div class="text-center mb-8">
                    <h2 class="text-2xl font-bold text-gray-800 mb-2">
                      Technical Experience
                    </h2>
                    <p class="text-gray-600">
                      Share your technical expertise and background
                    </p>
                  </div>

                  <!-- Experience Areas -->
                  <div
                    class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100"
                  >
                    <h3
                      class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2"
                    >
                      <i class="pi pi-star text-green-600"></i>
                      Areas of Experience
                    </h3>
                    <p class="text-gray-600 mb-4">
                      Which of the following areas do you have experience with?
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div
                        v-for="category of experienceAreasList"
                        :key="category.key"
                        class="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 hover:border-green-300 transition-colors cursor-pointer"
                        @click="toggleExperienceArea(category.name)"
                      >
                        <Checkbox
                          v-model="experienceAreas"
                          :inputId="category.key"
                          name="category"
                          :value="category.name"
                          class="text-green-600"
                        />
                        <label
                          :for="category.key"
                          class="cursor-pointer font-medium"
                          >{{ category.name }}</label
                        >
                      </div>
                    </div>
                    <p
                      v-if="experienceAreasError"
                      class="text-red-500 mt-3 flex items-center gap-1"
                    >
                      <i class="pi pi-exclamation-triangle"></i>
                      Please select at least one area of experience.
                    </p>
                  </div>

                  <!-- Brands Worked With -->
                  <div
                    class="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100"
                  >
                    <h3
                      class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2"
                    >
                      <i class="pi pi-tags text-orange-600"></i>
                      Brand Experience
                    </h3>
                    <p class="text-gray-600 mb-4">
                      Which brands have you primarily worked with?
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div
                        v-for="category of brandsWorkedWithList"
                        :key="category.key"
                        class="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 hover:border-orange-300 transition-colors cursor-pointer"
                        @click="toggleBrandExperience(category.key)"
                      >
                        <Checkbox
                          v-model="brandsWorkedWith"
                          :inputId="category.key"
                          name="category"
                          :value="category.key"
                          class="text-orange-600"
                        />
                        <label
                          :for="category.key"
                          class="cursor-pointer font-medium"
                          >{{ category.name }}</label
                        >
                      </div>
                    </div>
                    <InputText
                      v-if="brandsWorkedWith.includes('Other')"
                      id="otherBrand"
                      v-model="otherBrandSpecification"
                      type="text"
                      placeholder="Please specify other brands..."
                      class="w-full mt-4 p-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 transition-colors"
                    />
                    <p
                      v-if="brandsWorkedWithError"
                      class="text-red-500 mt-3 flex items-center gap-1"
                    >
                      <i class="pi pi-exclamation-triangle"></i>
                      Please select at least one brand.
                    </p>
                  </div>

                  <!-- Integration Experience -->
                  <div
                    class="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100"
                  >
                    <h3
                      class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2"
                    >
                      <i class="pi pi-sitemap text-cyan-600"></i>
                      Integration & Standards
                    </h3>

                    <div class="space-y-6">
                      <div>
                        <p class="text-gray-600 mb-4">
                          Do you have experience integrating security systems
                          into larger solutions?
                        </p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div
                            v-for="category in integrationExperienceList"
                            :key="category.key"
                            class="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 hover:border-cyan-300 transition-colors cursor-pointer"
                            @click="integrationExperience = category.name"
                          >
                            <RadioButton
                              v-model="integrationExperience"
                              :inputId="category.key"
                              name="integrationExperience"
                              :value="category.name"
                              class="text-cyan-600"
                            />
                            <label
                              :for="category.key"
                              class="cursor-pointer font-medium"
                              >{{ category.name }}</label
                            >
                          </div>
                        </div>
                        <p
                          v-if="integrationExperienceError"
                          class="text-red-500 mt-3 flex items-center gap-1"
                        >
                          <i class="pi pi-exclamation-triangle"></i>
                          Please select an option.
                        </p>
                      </div>

                      <div>
                        <p class="text-gray-600 mb-4">
                          Are you familiar with Hikvision product certifications
                          and installation standards?
                        </p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div
                            v-for="category in familiarWithStandards"
                            :key="category.key"
                            class="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 hover:border-cyan-300 transition-colors cursor-pointer"
                            @click="familiarWithStandard = category.name"
                          >
                            <RadioButton
                              v-model="familiarWithStandard"
                              :inputId="category.key"
                              name="familiarWithStandard"
                              :value="category.name"
                              class="text-cyan-600"
                            />
                            <label
                              :for="category.key"
                              class="cursor-pointer font-medium"
                              >{{ category.name }}</label
                            >
                          </div>
                        </div>
                        <p
                          v-if="familiarWithStandardError"
                          class="text-red-500 mt-3 flex items-center gap-1"
                        >
                          <i class="pi pi-exclamation-triangle"></i>
                          Please select an option.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Navigation Buttons -->
                <div class="flex pt-8 justify-between">
                  <Button
                    label="Previous"
                    severity="secondary"
                    icon="pi pi-arrow-left"
                    class="px-6 py-3 rounded-xl font-semibold"
                    @click="activateCallback(1)"
                  />
                  <Button
                    label="Continue"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    class="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 border-0 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    @click="validateAndProceed(activateCallback, 2)"
                  />
                </div>
              </StepPanel>

              <!-- Step 3: Technical Questions -->
              <StepPanel v-slot="{ activateCallback }" :value="3">
                <div class="space-y-6">
                  <div class="text-center mb-8">
                    <h2 class="text-2xl font-bold text-gray-800 mb-2">
                      Technical Questions
                    </h2>
                    <p class="text-gray-600">
                      Help us understand your current operations
                    </p>
                  </div>

                  <!-- Purchase Sources -->
                  <div
                    class="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-6 border border-violet-100"
                  >
                    <h3
                      class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2"
                    >
                      <i class="pi pi-shopping-cart text-violet-600"></i>
                      Purchase Sources
                    </h3>
                    <p class="text-gray-600 mb-4">
                      Where do you currently purchase your security products?
                      (Select all that apply)
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div
                        v-for="category in wherePurchase"
                        :key="category.key"
                        class="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 hover:border-violet-300 transition-colors cursor-pointer"
                        @click="togglePurchaseSource(category.name)"
                      >
                        <Checkbox
                          v-model="purchaseSource"
                          :inputId="category.key"
                          name="purchaseSource"
                          :value="category.name"
                          class="text-violet-600"
                        />
                        <label
                          :for="category.key"
                          class="cursor-pointer font-medium"
                          >{{ category.name }}</label
                        >
                      </div>
                    </div>
                    <p
                      v-if="purchaseError"
                      class="text-red-500 mt-3 flex items-center gap-1"
                    >
                      <i class="pi pi-exclamation-triangle"></i>
                      Please select at least one option.
                    </p>
                  </div>

                  <!-- Hikvision Products -->
                  <div
                    class="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100"
                  >
                    <h3
                      class="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2"
                    >
                      <i class="pi pi-eye text-teal-600"></i>
                      Hikvision Experience
                    </h3>
                    <p class="text-gray-600 mb-4">
                      Do you currently purchase Hikvision products?
                    </p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div
                        v-for="category in options"
                        :key="category.key"
                        class="flex items-center gap-3 p-3 rounded-lg border-2 border-gray-200 hover:border-teal-300 transition-colors cursor-pointer"
                        @click="purchaseHikvision = category.name"
                      >
                        <RadioButton
                          v-model="purchaseHikvision"
                          :inputId="category.key"
                          name="purchaseHikvision"
                          :value="category.name"
                          class="text-teal-600"
                        />
                        <label
                          :for="category.key"
                          class="cursor-pointer font-medium"
                          >{{ category.name }}</label
                        >
                      </div>
                    </div>
                    <p
                      v-if="currentlyPurchaseError"
                      class="text-red-500 mt-3 flex items-center gap-1"
                    >
                      <i class="pi pi-exclamation-triangle"></i>
                      Please select an option.
                    </p>
                  </div>

                  <!-- Additional Questions -->
                  <div
                    class="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100"
                  >
                    <h3
                      class="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2"
                    >
                      <i class="pi pi-file-edit text-amber-600"></i>
                      Additional Information
                    </h3>
                    <div class="space-y-6">
                      <div
                        v-for="field in textareaFields"
                        :key="field.id"
                        class="space-y-3"
                      >
                        <label class="font-semibold text-gray-700 block">
                          <span v-html="field.label"></span>
                        </label>
                        <div class="relative">
                          <Textarea
                            :id="field.id"
                            v-model="formData[field.model]"
                            rows="4"
                            cols="30"
                            style="resize: none"
                            class="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-amber-400 transition-colors"
                            placeholder="Please provide detailed information..."
                          />
                        </div>
                        <p
                          v-if="errors[field.model]"
                          class="text-red-500 flex items-center gap-1"
                        >
                          <i class="pi pi-exclamation-triangle"></i>
                          {{ errors[field.model] }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Navigation Buttons -->
                <div class="flex pt-8 justify-between">
                  <Button
                    label="Previous"
                    severity="secondary"
                    icon="pi pi-arrow-left"
                    class="px-6 py-3 rounded-xl font-semibold"
                    @click="activateCallback(2)"
                  />
                  <Button
                    label="Submit Application"
                    icon="pi pi-check"
                    iconPos="right"
                    class="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 border-0 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    @click="handleSubmit(activateCallback)"
                  />
                </div>
              </StepPanel>

              <!-- Step 4: Success -->
              <StepPanel v-slot="{ activateCallback }" :value="4">
                <div class="text-center space-y-8">
                  <!-- Success Animation -->
                  <div class="flex justify-center mb-8">
                    <div class="relative">
                      <div
                        class="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl"
                      >
                        <i
                          class="pi pi-check text-white text-4xl animate-pulse"
                        ></i>
                      </div>
                      <div
                        class="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20 animate-ping"
                      ></div>
                    </div>
                  </div>

                  <div class="max-w-2xl mx-auto">
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">
                      Application Submitted Successfully!
                    </h2>
                    <p class="text-lg text-gray-600 mb-8">
                      Thank you for your interest in becoming a partner. Your
                      application will undergo a thorough review process.
                    </p>

                    <!-- Benefits Card -->
                    <div
                      class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 mb-8"
                    >
                      <h3 class="text-xl font-semibold text-gray-800 mb-6">
                        Upon successful verification, you'll gain access to:
                      </h3>
                      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="text-center">
                          <div
                            class="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4"
                          >
                            <i class="pi pi-dollar text-white text-2xl"></i>
                          </div>
                          <h4 class="font-semibold text-gray-800 mb-2">
                            Reseller Pricing
                          </h4>
                          <p class="text-gray-600 text-sm">
                            Competitive wholesale rates for all products
                          </p>
                        </div>
                        <div class="text-center">
                          <div
                            class="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4"
                          >
                            <i class="pi pi-book text-white text-2xl"></i>
                          </div>
                          <h4 class="font-semibold text-gray-800 mb-2">
                            Marketing Resources
                          </h4>
                          <p class="text-gray-600 text-sm">
                            Comprehensive marketing and technical materials
                          </p>
                        </div>
                        <div class="text-center">
                          <div
                            class="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
                          >
                            <i class="pi pi-users text-white text-2xl"></i>
                          </div>
                          <h4 class="font-semibold text-gray-800 mb-2">
                            Dedicated Support
                          </h4>
                          <p class="text-gray-600 text-sm">
                            Product and business support from our team
                          </p>
                        </div>
                      </div>
                    </div>

                    <!-- Contact Information -->
                    <div
                      class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
                    >
                      <h3 class="text-xl font-semibold text-gray-800 mb-6">
                        Need assistance? Contact us:
                      </h3>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div
                          class="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl"
                        >
                          <div
                            class="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center"
                          >
                            <i class="pi pi-envelope text-white"></i>
                          </div>
                          <div>
                            <p class="font-semibold text-gray-800">Email</p>
                            <a
                              href="mailto:sdl@hikvisionkenya.com"
                              class="text-blue-600 hover:text-blue-800 transition-colors"
                            >
                              sdl@hikvisionkenya.com
                            </a>
                          </div>
                        </div>
                        <div
                          class="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl"
                        >
                          <div
                            class="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center"
                          >
                            <i class="pi pi-phone text-white"></i>
                          </div>
                          <div>
                            <p class="font-semibold text-gray-800">Phone</p>
                            <a
                              href="tel:+254727909060"
                              class="text-green-600 hover:text-green-800 transition-colors"
                            >
                              +254 727 909 060
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Company Information -->
                    <div
                      class="mt-8 p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200"
                    >
                      <div class="text-center">
                        <p class="text-gray-800 font-semibold mb-2">
                          Best regards,
                        </p>
                        <p class="text-gray-700 font-medium">
                          Secure Digital Limited | Hik Digital Mart Limited
                        </p>
                        <p class="text-gray-600">
                          SDLKenya Online Shop Administration Department
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex pt-8 justify-center">
                  <Button
                    label="Start New Application"
                    severity="secondary"
                    icon="pi pi-refresh"
                    class="px-6 py-3 rounded-xl font-semibold"
                    @click="resetForm()"
                  />
                </div>
              </StepPanel>
            </StepPanels>
          </Stepper>
        </div>
      </div>
    </div>

    <!-- Background Carousel - Enhanced -->
    <!-- <div class="hidden lg:block fixed right-0 top-0 h-full w-1/3 z-0">
      <Carousel
        :verticalViewPortHeight="2000"
        :autoplayInterval="5000"
        :value="images"
        :numVisible="1"
        :numScroll="1"
        :showIndicators="true"
        :showNavigators="false"
        circular
        class="h-full w-full"
      >
        <template #item="slotProps">
          <div
            class="relative w-full h-screen flex justify-center items-center overflow-hidden"
          >
            <img
              :src="slotProps.data.src"
              :alt="slotProps.data.alt"
              class="object-cover w-full h-full"
            />
            <div
              class="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"
            ></div>
            <div
              class="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-sm text-white p-6 rounded-2xl"
            >
              <h3 class="text-xl font-semibold mb-2">
                {{ slotProps.data.title || slotProps.data.alt }}
              </h3>
              <p class="text-gray-200">
                {{
                  slotProps.data.description ||
                  "Professional security solutions"
                }}
              </p>
            </div>
          </div>
        </template>
      </Carousel>
    </div> -->

    <!-- Toast Notifications -->
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

      this.textareaFields.forEach((field) => {
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

        this.$toast.add({
          severity: "success",
          summary: response.data.message,
          group: "br",
          life: 3000,
        });
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
