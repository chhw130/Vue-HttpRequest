<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import { instance } from '../../api/apiSetting';

export default {
  data() {
    return {
      results: [],
    };
  },
  components: {
    SurveyResult,
  },
  methods: {
    loadExperiences() {
      instance('').then((res) => {
        const APIData = [];
        for (const id in res.data) {
          APIData.push({
            id,
            name: res.data[id].name,
            rating: res.data[id].rating,
          });
        }
        this.results = APIData;
      });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
