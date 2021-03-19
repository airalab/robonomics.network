<template>
	
  <a href="#" @click.prevent="copy" class="link-copy button primary small" title="Copy address">

    <copy class="icon-tool copy"/>

    <svg class="icon-tool ok" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
      <g>
        <g>
          <path d="M437,75C388.7,26.6,324.4,0,256,0C187.6,0,123.3,26.6,75,75C26.6,123.3,0,187.6,0,256s26.6,132.7,75,181s112.6,75,181,75
            c68.4,0,132.7-26.6,181-75s75-112.6,75-181S485.4,123.3,437,75z M256,482C131.4,482,30,380.6,30,256S131.4,30,256,30
            s226,101.4,226,226S380.6,482,256,482z"/>
        </g>
      </g>
      <g>
        <g>
          <path d="M378.3,173.9c-5.9-5.9-15.4-5.9-21.2,0L224.6,306.3l-69.7-69.7c-5.9-5.9-15.4-5.9-21.2,0s-5.9,15.4,0,21.2l80.3,80.3
            c2.9,2.9,6.8,4.4,10.6,4.4s7.7-1.5,10.6-4.4l143.1-143.1C384.2,189.2,384.2,179.7,378.3,173.9z"/>
        </g>
      </g>
    </svg>


    <svg class="icon-tool error" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
      <g>
        <g>
          <path d="M437,75C388.7,26.6,324.4,0,256,0C187.6,0,123.3,26.6,75,75C26.6,123.3,0,187.6,0,256s26.6,132.7,75,181s112.6,75,181,75
            c68.4,0,132.7-26.6,181-75s75-112.6,75-181S485.4,123.3,437,75z M256,482C131.4,482,30,380.6,30,256S131.4,30,256,30
            s226,101.4,226,226S380.6,482,256,482z"/>
        </g>
      </g>
      <g>
        <path d="M237,273.1l-5.5-82.8c-1-16.1-1.6-27.7-1.6-34.7c0-9.6,2.5-17,7.5-22.4c5-5.4,11.6-8,19.8-8c9.9,0,16.5,3.4,19.9,10.3
          c3.3,6.9,5,16.7,5,29.6c0,7.6-0.4,15.3-1.2,23.2l-7.4,85.2c-0.8,10.1-2.5,17.9-5.2,23.3c-2.7,5.4-7,8.1-13.1,8.1
          c-6.2,0-10.5-2.6-13-7.9C239.8,291.8,238,283.8,237,273.1z M256.2,386.9c-7,0-13.2-2.3-18.4-6.8c-5.2-4.6-7.9-10.9-7.9-19.1
          c0-7.1,2.5-13.2,7.5-18.2c5-5,11.1-7.5,18.4-7.5c7.3,0,13.5,2.5,18.6,7.5c5.1,5,7.7,11.1,7.7,18.2c0,8.1-2.6,14.4-7.8,19
          C269.1,384.5,263.1,386.9,256.2,386.9z"/>
      </g>
    </svg>

  </a>

</template>


<script>

export default {
  props: {
    address: ''
  },

  data() {
        
        return {
            add: this.address
        }
        
  },

  components: {
      copy: () => import('~/assets/images/icons/copy.svg')
  },

  methods: {

    copy: function (event) {
      var
        a = this.address,
        link = event.target.closest('a');

      navigator.clipboard.writeText(a).then(function() {

        link.classList.remove('link-copy', 'link-copy-error');
        link.classList.add('link-copy-ok');
          
        setTimeout(function() {
          link.classList.remove('link-copy-error', 'link-copy-ok');
          link.classList.add('link-copy');
        }, 1000);

      }, function() {
        
        link.classList.remove('link-copy', 'link-copy-ok');
        link.classList.add('link-copy-error');

        setTimeout(function() {
          link.classList.remove('link-copy-error', 'link-copy-ok');
          link.classList.add('link-copy');
        }, 1000);

      });
    }
  }

}
</script>

<style lang="scss" scoped>

  .icon-tool{
    width: 1.2rem;
  }

  .link-copy {
    svg { display: none; }
    svg.copy { display: block; }
  }

  .link-copy-ok {
    svg { display: none; }
    svg.ok { display: block; }
  }

  .link-copy-error {
    svg { display: none; }
    svg.error { display: block; }
  }

</style>