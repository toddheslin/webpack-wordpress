import { get } from 'axios'
import Vue from 'vue'

module.exports = document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('jobs')) {
    const jobsVue = new Vue({
      el: '#jobs',
      data: {
        catFilter: 'all'
      },
      methods: {
        changeCatFilter: function(filter) {
          this.catFilter = filter
        },
        matchesCurrentFilter: function(category) {
          if (this.catFilter === 'all' || this.catFilter === category) return true
          else return false
        },
        isCurrentFilter: function(category) {
          if (this.catFilter === category) return true
          else return false
        },
      }
    })

  }
})