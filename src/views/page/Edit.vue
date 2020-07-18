<template>
  <div id="page-edit" class="row justify-content-center align-items-center">
    <ValidationObserver v-slot="{ handleSubmit }" class="col-12 pt-5">
      <form @submit.prevent="handleSubmit(submit)">
        <ValidationProvider v-slot="v" rules="required|min:3"
                            :name="$t('pageEdit.labels.Title')" :debounce="300">
          <b-form-group>
            <label>{{ $t('pageEdit.labels.Title') }}</label>
            <b-input v-model="title" type="text"></b-input>
            <div class="help-block with-errors text-danger"
                 v-if=v.errors[0]>{{ v.errors[0] }}
            </div>
          </b-form-group>
        </ValidationProvider>
        <ValidationProvider v-slot="v" rules="required|min:6"
                            :name="$t('pageEdit.labels.Body')"
                            :debounce="300">
          <mce-field v-model="body" :init-value="page.body" :label="$t('pageEdit.labels.Body')">
          </mce-field>
          <div class="help-block with-errors text-danger"
               v-if=v.errors[0]>{{ v.errors[0] }}
          </div>
        </ValidationProvider>
        <div class="text-right">
          <b-button size="xs" type="submit" variant="primary">
            {{ $t('pageEdit.buttons.confirm') }}
          </b-button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import MceField from '@/components/formFields/MceField.vue';
import { mapActions, mapGetters } from 'vuex';
import pages from '@/api/pages';
import routes from '@/constants/routes';

export default {
  name: 'EditPage',
  components: { MceField },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.getPage({
        type: to.params.type,
        slug: to.params.slug,
      })
        .then(() => {
          next();
        });
    });
  },
  data() {
    return {
      body: '',
      title: '',
    };
  },
  mounted() {
    this.body = this.page.body;
    this.title = this.page.title;
  },
  methods: {
    ...mapActions(['getPage']),
    submit() {
      pages.update({
        id: this.page.id,
        body: this.body,
        title: this.title,
      })
        .then(() => {
          this.$toasted.success(this.$t('pageEdit.messages.success'));
          this.$router.push({
            name: routes.PAGE,
            params: {
              type: this.$route.params.type,
              slug: this.$route.params.slug,
            },
          });
        }, () => {
          this.$toasted.error(this.$t('messages.error'));
        });
    },
  },
  computed: {
    ...mapGetters(['details']),
    page() {
      return this.details[this.$route.params.type]
        ? this.details[this.$route.params.type][this.$route.params.slug]
        : {};
    },
  },
};
</script>

<style scoped>

</style>
