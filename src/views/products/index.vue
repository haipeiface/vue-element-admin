<template>
  <div>
    <!--    <el-breadcrumb separator="/">-->
    <!--      <el-breadcrumb-item><a href="#/">首页</a></el-breadcrumb-item>-->
    <!--      <el-breadcrumb-item><a href="#/">商品列表</a></el-breadcrumb-item>-->
    <!--    </el-breadcrumb>-->
    <pop-cart class="pop-cart" />

    <el-table
      :data="products"
      style="width: 100%"
    >
      <el-table-column
        prop="title"
        label="商品"
      />
      <el-table-column
        prop="price"
        label="价格"
      />
      <el-table-column
        prop="address"
        label="操作"
      >
        <!-- 这一行可以通过插槽获取作用域数据 -->
        <!-- <template slot-scope="scope"> -->
        <template v-slot="scope">
          <el-button @click="addToCart(scope.row)">加入购物车</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import popCart from '@/components/PopCart/index'

export default {
  name: 'ProductList',
  components: {
    popCart
  },
  computed: {
    ...mapState('products', ['products']) // namespaced写法
  },
  methods: {
    ...mapActions('products', ['getProducts']),
    // 将添加购物商品的数据映射到methods中
    ...mapMutations('cart', ['addToCart'])
  },
  created() {
    this.getProducts()
  }
}
</script>

<style scoped>
.pop-cart {
  float: right;
  margin-top: 20px;
  margin-right: 200px;
}
</style>
