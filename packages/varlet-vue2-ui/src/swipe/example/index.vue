<template>
  <div class="var-swipe-example">
    <app-type>{{ pack.basicUsage }}</app-type>
    <var-swipe class="swipe" ref="swipe">
      <var-swipe-item>
        <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="" />
      </var-swipe-item>
      <var-swipe-item>
        <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" alt="" />
      </var-swipe-item>
      <var-swipe-item>
        <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" alt="" />
      </var-swipe-item>
    </var-swipe>

    <app-type>{{ pack.forbidLoop }}</app-type>
    <var-swipe class="swipe" :loop="false">
      <var-swipe-item>
        <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="" />
      </var-swipe-item>
      <var-swipe-item>
        <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" alt="" />
      </var-swipe-item>
      <var-swipe-item>
        <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" alt="" />
      </var-swipe-item>
    </var-swipe>

    <app-type>{{ pack.autoplay }}</app-type>
    <var-swipe class="swipe" :autoplay="2000">
      <var-swipe-item>
        <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="" />
      </var-swipe-item>
      <var-swipe-item>
        <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" alt="" />
      </var-swipe-item>
      <var-swipe-item>
        <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" alt="" />
      </var-swipe-item>
    </var-swipe>

    <app-type>{{ pack.vertical }}</app-type>
    <var-swipe class="swipe" vertical>
      <var-swipe-item>
        <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="" />
      </var-swipe-item>
      <var-swipe-item>
        <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" alt="" />
      </var-swipe-item>
      <var-swipe-item>
        <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" alt="" />
      </var-swipe-item>
    </var-swipe>

    <app-type>{{ pack.handleChange }}</app-type>
    <var-swipe class="swipe" @change="Snackbar">
      <var-swipe-item>
        <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="" />
      </var-swipe-item>
      <var-swipe-item>
        <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" alt="" />
      </var-swipe-item>
      <var-swipe-item>
        <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" alt="" />
      </var-swipe-item>
    </var-swipe>

    <app-type>{{ pack.customIndicator }}</app-type>
    <var-swipe class="swipe">
      <template #default>
        <var-swipe-item>
          <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat.jpg" alt="" />
        </var-swipe-item>
        <var-swipe-item>
          <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat2.jpg" alt="" />
        </var-swipe-item>
        <var-swipe-item>
          <img class="swipe-item" src="https://varlet.gitee.io/varlet-ui/cat3.jpg" alt="" />
        </var-swipe-item>
      </template>

      <template #indicator="{ index, length }">
        <div class="indicators">{{ index + 1 }} / {{ length }}</div>
      </template>
    </var-swipe>

    <div class="space"></div>
  </div>
</template>

<script>
import VarSwipe from '..'
import VarSwipeItem from '../../swipe-item'
import AppType from '@varlet-vue2/cli/site/mobile/components/AppType'
import Snackbar from '../../snackbar'
import { use, pack } from './locale'
import { watchLang } from '@varlet-vue2/cli/site/utils'

export default {
  name: 'SwipeExample',

  components: {
    VarSwipe,
    VarSwipeItem,
    AppType,
  },

  computed: {
    pack() {
      return pack.value
    },
  },

  created() {
    watchLang(this, use)
  },

  methods: { Snackbar },
}
</script>

<style scoped lang="less">
.var-swipe-example {
  .swipe {
    height: 160px;
  }

  .swipe-item {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  .space {
    height: 20px;
  }

  .indicators {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 4px 0;
    color: #fff;
    font-size: 14px;
    background: rgba(0, 0, 0, 0.6);
  }
}
</style>
