import{aj as o}from"./B_B6csQg.js";import{s as d}from"./CbLU7av0.js";var r={name:"BaseEditableHolder",extends:d,emits:["update:modelValue","value-change"],props:{modelValue:{type:null,default:void 0},defaultValue:{type:null,default:void 0},name:{type:String,default:void 0},invalid:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},formControl:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0},$pcForm:{default:void 0},$pcFormField:{default:void 0}},data:function(){return{d_value:this.defaultValue||this.modelValue}},watch:{modelValue:function(i){this.d_value=i},defaultValue:function(i){this.d_value=i},$formName:{immediate:!0,handler:function(i){var l,e;this.formField=((l=this.$pcForm)===null||l===void 0||(e=l.register)===null||e===void 0?void 0:e.call(l,i,this.$formControl))||{}}},$formControl:{immediate:!0,handler:function(i){var l,e;this.formField=((l=this.$pcForm)===null||l===void 0||(e=l.register)===null||e===void 0?void 0:e.call(l,this.$formName,i))||{}}},$formDefaultValue:{immediate:!0,handler:function(i){this.d_value!==i&&(this.d_value=i)}}},formField:{},methods:{writeValue:function(i,l){var e,t;this.controlled&&(this.d_value=i,this.$emit("update:modelValue",i)),this.$emit("value-change",i),(e=(t=this.formField).onChange)===null||e===void 0||e.call(t,{originalEvent:l,value:i})}},computed:{$filled:function(){return o(this.d_value)},$invalid:function(){var i,l,e,t;return(i=(l=this.invalid)!==null&&l!==void 0?l:(e=this.$pcFormField)===null||e===void 0||(e=e.$field)===null||e===void 0?void 0:e.invalid)!==null&&i!==void 0?i:(t=this.$pcForm)===null||t===void 0||(t=t.states)===null||t===void 0||(t=t[this.$formName])===null||t===void 0?void 0:t.invalid},$formName:function(){var i;return this.name||((i=this.$formControl)===null||i===void 0?void 0:i.name)},$formControl:function(){var i;return this.formControl||((i=this.$pcFormField)===null||i===void 0?void 0:i.formControl)},$formDefaultValue:function(){var i,l,e,t;return(i=(l=this.d_value)!==null&&l!==void 0?l:(e=this.$pcFormField)===null||e===void 0?void 0:e.initialValue)!==null&&i!==void 0?i:(t=this.$pcForm)===null||t===void 0||(t=t.initialValues)===null||t===void 0?void 0:t[this.$formName]},controlled:function(){return this.$inProps.hasOwnProperty("modelValue")||!this.$inProps.hasOwnProperty("modelValue")&&!this.$inProps.hasOwnProperty("defaultValue")},filled:function(){return this.$filled}}},f={name:"BaseInput",extends:r,props:{size:{type:String,default:null},fluid:{type:Boolean,default:null},variant:{type:String,default:null}},inject:{$parentInstance:{default:void 0},$pcFluid:{default:void 0}},computed:{$variant:function(){var i;return(i=this.variant)!==null&&i!==void 0?i:this.$primevue.config.inputStyle||this.$primevue.config.inputVariant},$fluid:function(){var i;return(i=this.fluid)!==null&&i!==void 0?i:!!this.$pcFluid},hasFluid:function(){return this.$fluid}}};export{f as s};
