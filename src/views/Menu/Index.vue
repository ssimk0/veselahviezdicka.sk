<template>
  <div id="menu">
    <b-container :fluid="true">
      <div v-if="user && (user.is_admin || user.can_edit)" class="row">
        <div class="col-12 admin-button text-right pb-4">
          <router-link :to="`/menu/upload`"
                       class="text-secondary btn btn-xs btn-primary h4 mt-2">
            <i class="fas fa-upload"></i>
            {{ $t('buttons.upload') }}
          </router-link>
        </div>
      </div>
      <pdf
        class="mx-auto"
        :src="`${baseApiUrl}/api/v1/uploads/menu/weekly/latest`"
        :scale="1.5"
        :resize="false"
      >
        <template slot="loading">
          Načitavanie ...
        </template>
      </pdf>
    </b-container>
  </div>
</template>

<script>
import pdf from 'pdfvuer';
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: 'Menu',
  components: {
    pdf,
  },
  computed: {
    ...mapGetters(['user']),
    baseApiUrl() {
      return axios.defaults.baseURL;
    },
  },
};
</script>
