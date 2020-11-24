<template>
    <div class="tabs">
        <ul class="tabs__list">
            <li
                v-for="(tab, i) in tabs"
                :key="i"
                :class="{ 'is-active': tab.isActive }"
                class="tabs__item"
            >
                <a
                    v-html="tab.name"
                    :href="'#' + tab.name.toLowerCase().replace(/ /g, '-')"
                    @click="selectTab(tab, $event)"
                ></a>
            </li>
        </ul>

        <div class="tabs__content">
            <slot/>
        </div>
    </div>
</template>


<style lang="scss">

  .tabs {
    &__list {
        list-style: none;
        width: 100%;
        margin-left: 0;
        text-align: center;

        li {
            display: inline-block;
            margin-left: 2rem;

            &:first-child {
                margin-left: 0;
            }
        }
    }

    &__item {
    
        a {
          text-transform: uppercase;
          letter-spacing: 0.05rem;
          text-decoration: none;
          font-weight: 400;
        }

        &.is-active a {
          color: var(--color-text);
        }
    }
    
  }

  
</style>


<script>

export default {

    data() {
        return {
            tabs: [],
            isActive: false
        };
    },

    props: {
        selected: { default: false}
    },
    
    mounted() {
        
        this.tabs = this.$children;

        if (window.location.hash){
            const selectedTab = this.findTab(window.location.hash);
            this.selectTab(selectedTab)
        }
        
    },
    methods: {
        findTab(hash) {
            return this.tabs.find(tab => '#' + tab.name.toLowerCase().replace(/ /g, '-') === hash);
        },

        selectTab(selectedTab, event) {

            // event.preventDefault();

            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }

}
</script>