<template>
  <div class="timeline__item">
    <div class="timeline__header">
      <div class="timeline__header-left">
        <span class="timeline__year">{{ year }}</span>
        <h2 class="timeline__title">{{title}}</h2>
      </div>
      <div class="timeline__header-right" v-if="img">
        <g-link  class="timeline__link-with-arrow" :to="linkWithImg">
          {{ $t('read our almanac') }}
        </g-link>
        <g-link  class="timeline__img" :to="linkWithImg">
          <g-image :src="require('!!assets-loader!~/assets/images/'+ img)" quality="75"/>
        </g-link>
      </div>
    </div>
    <div :class="'block' + id" class="timeline__text-wrapper">
      <div class="timeline__text" v-html="text"></div>
      <span class="timeline__sideline" :class="'line' + id" v-if="sideLine" >{{ sideLine }}</span>
    </div>
    <div class="timeline__events" v-if="events.length">
      <h3>{{ $t('Notable events') }}:</h3>
      <ul class="timeline__events-list">
        <li class="timeline__events-item" v-for="event in events" :key="event.id">
          <g-link class="timeline__link" :to="event.link">
            {{ event.name}}
          </g-link>
        </li>
      </ul>
    </div> 
  </div>
</template>

<script>
export default {

  props: {
    id: {
      type: String | Number,
      default: '',
    },
    year: {
      type: String | Number,
      default: '',
      required: true
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    text: {
      type: String,
      default: '',
      required: true
    },
    events: {
      type: Array,
      default() {
        return []
      }
    },
    img: {
      type: String,
      default: '',
    },
    linkWithImg: {
      type: String,
      default: ''
    },
    sideLine: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      observer: null,
      currentScrollPos: 0,
      visible: false,
    }
  },

  methods: {

    callback(entries) {
      entries.forEach(({ target, isIntersecting}) => {
        const line = target.querySelector(`.timeline__sideline`);
          if (!isIntersecting) {
            this.visible = false;
            // console.log('out of sight')
          }  else {
            const value = target.clientHeight > 900 ? 0 : 1000;
            setTimeout(() => {
              this.visible = true;
            }, value);
            this.scroll(target, line, isIntersecting)
            // console.log('in sight')
          }
        
      });
    },


    scroll(block, line) {

      let currPos = window.getComputedStyle(line).getPropertyValue("top");

      let lastKnown = {pos: window.scrollY, line};

      const self = this;

      const value = block.clientHeight > 900 ? 8 : 5;

      if(line && block) {
        window.addEventListener("scroll", function(e) {
  
          self.currentScrollPos = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

          if(!self.visible) return;

          currPos = window.getComputedStyle(line).getPropertyValue("top")
          const width = window.getComputedStyle(line).getPropertyValue("width")
          const max = block.clientHeight - parseInt(width.slice(0, -2))
    

            if(lastKnown.pos > window.scrollY) {
              if(self.currentScrollPos > 0) {
                if(parseInt(currPos.slice(0, -2)) < 0) {
                  line.style.top = '0px';
                  return
                }
                line.style.top = parseInt(currPos.slice(0, -2)) - value + 'px';
              }
            } else {
              if(parseInt(currPos.slice(0, -2)) < max) line.style.top = parseInt(currPos.slice(0, -2)) + value + 'px';
            }
            lastKnown.pos = self.currentScrollPos;
        })
      } 
    }

  },



  mounted() {
    const block = document.querySelector(`.block${this.$props.id}`);
    this.observer = new IntersectionObserver(this.callback, {
      threshold: 0.2,
    });
    this.observer.observe(block)
  },

  beforeDestroy() {
    this.observer.disconnect();
  },

   

}
</script>

<style>

  .timeline__item {
    /* position: relative; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 166px;
  }

  .timeline__header {
    position: relative;
    width: 100%;
    min-height: 166px;
    height: 100%;
    display: grid;
    grid-template-columns: minmax(200px, 520px) minmax(250px, 1fr);
    margin-bottom: var(--space);
    gap: calc(var(--space) * 0.5);
  }

  .timeline__header-right {
    display: flex;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .timeline__header-right img {
    width: 154px;
    height: 156px;
  } 

  .timeline__year {
    display: inline-block;
    padding: 0.2rem 0.9rem;
    margin-bottom: calc(var(--space) * 0.5);
    font-weight: 900;
    font-size: calc(var(--base-font-size) * 1.5);
    background-color: var(--rb-color-green-accent);
  }

  .timeline__title {
    margin-top: 0;
    padding-left: calc(var(--space) * 0.5);
    font-family: var(--font-family);
    font-weight: 900;
    font-size: calc(var(--base-font-size) * 1.3);
    text-align: left;
    text-transform: uppercase;
  }

  .timeline__img {
    flex-shrink: 0;
  }

  .timeline__link-with-arrow {
    position: relative;
    margin-right: calc(var(--space) * 0.5);
    font-weight: 700;
    font-size: 20px;
  }

  .timeline__link-with-arrow::after {
    content: '';
    position: absolute;
    top: -8px;
    right: -3px;
    width: 67px;
    height: 16px;
    background-image: url("data:image/svg+xml,%3Csvg width='67' height='16' viewBox='0 0 67 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM66.7071 8.70711C67.0976 8.31658 67.0976 7.68342 66.7071 7.29289L60.3431 0.928932C59.9526 0.538408 59.3195 0.538408 58.9289 0.928932C58.5384 1.31946 58.5384 1.95262 58.9289 2.34315L64.5858 8L58.9289 13.6569C58.5384 14.0474 58.5384 14.6805 58.9289 15.0711C59.3195 15.4616 59.9526 15.4616 60.3431 15.0711L66.7071 8.70711ZM1 9L66 9V7L1 7L1 9Z' fill='%232949D3'/%3E%3C/svg%3E%0A");
  }

  .timeline__link{
    text-decoration: none;
  }

  .timeline__text-wrapper {
    position: relative;
  }


  .timeline__events {
    margin-top: var(--space);
    align-self: flex-start;
  }

  .timeline__events h3 {
    margin-bottom: calc(var(--space) * 0.5);
    text-align: left;
    font-family: var(--font-family);
    font-weight: 400;
    text-transform: none;
  }

  .timeline__events-list {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
  }

  .timeline__events-item::marker {
    color: var(--color-blue);
  } 


  .timeline__events-item .timeline__link  {
    text-decoration: underline;
  }

  .timeline__events-item:not(:last-child) {
    margin-bottom: calc(var(--space) * 0.3);
  }

  /* side line */
  .timeline__sideline {
    position: absolute;
    top: 0;
    left: -30px;
    display: block;
    font-family: var(--font-family);
    font-size: 24px;
    font-weight: 900;
    color: var(--rb-color-green-accent);
    transform: rotate(-90deg) translate(-100%, 0);
    transform-origin: 0 0;
    white-space: nowrap;
    text-transform: uppercase;
    z-index: 900;
  }

  /* for ar locale */
  html[lang="ar"] .timeline__events {
    align-self: flex-end;
  }

  html[lang="ar"] .timeline__events h3 {
    text-align: right;
  }

  @media screen and (max-width: 560px) {

    .timeline__header-left {
      padding-bottom: calc(var(--space) * 2);
    }
    
    .timeline__title {
      font-size: calc(var(--base-font-size) * 1.15);
    }

    .timeline__img img {
      width: 150px;
      height: 150px;
    }

    .timeline__link-with-arrow {
      font-size: 18px;
    }

    .timeline__sideline {
      left: -22px;
      font-size: 18px;
    }
  }

  @media screen and (max-width:450px) {
    .timeline__text-wrapper {
      padding-left: 20px;
    }

    .timeline__sideline {
      left: -30px;
    }
    
  }

  @media screen and (max-width: 390px) {
    .timeline__title {
      max-width: 150px;
      font-size: calc(var(--base-font-size) * 0.8);
    }

    .timeline__link-with-arrow {
      font-size: 16px;
    }
  }


</style>