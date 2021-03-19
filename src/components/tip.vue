<template>
    <details @click="focus($event)" :class="detailsClass">
        <summary class="button primary small"><span>{{summary}}</span></summary>
        <div class="tip oldy"><slot /></div>
    </details>
</template>

<script>

export default {
  props: {
    summary: { type: String },
    position: {
        type: String,
        default: 'right-bottom',
        validator: function (value) {
            return ['right-bottom', 'right-top', 'left-bottom', 'left-top', 'center-bottom'].indexOf(value) !== -1;
        }
    }
  },

  computed: {
    detailsClass() {
      return {
        [`${this.position}`]: true
      };
    }
  },

  methods: {
      focus(event) {

        let detailsTag = event.target.closest('details')

        document.addEventListener("click", function (e) {
            var insideTooltip = detailsTag.contains(e.target)

            if (!insideTooltip) {
                detailsTag.open = false
            }
        });

      },
  }
}
</script>

<style scoped>
    details {
        position: relative;
    }

    details summary {
        cursor: pointer;
        list-style-type: none;
    }

    summary::-webkit-details-marker, summary::marker {
        display: none
    }

    details summary, details summary span {
        display: block;
    }

    details[open] summary span {
        transform: scaleY(-1);
    }

    details .tip {
        position: absolute;
        background: var(--body-bg);
        font-size: 1rem;
        text-align: left;
        padding: calc(var(--space)/2);
        width: 16rem;
        font-weight: 500;
    }

    details.right-bottom .tip {
        top: calc(100% + .2rem);
        right: 0;
    }

    details.left-bottom .tip {
        top: calc(100% + .2rem);
        left: 0;
    }

    details.center-bottom .tip {
        top: calc(100% + .2rem);
        left: calc(50% - 8rem);
    }

    details:focus-within summary {
        background-color: var(--oldy-box-color);
        border-color: var(--oldy-box-color);
    }

</style>