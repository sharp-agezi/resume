<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>工作经历</span>
      </div>
    </template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="工作日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="company"
        label="公司名称"
        width="180">
      </el-table-column>
      <el-table-column
        label="职责">
        <template #default="props">
          <p v-for="(item,index) in props.row.duty" :key="index">{{index+1}}、{{ item}}</p>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2014/01 - 2015/04',
          company: '安徽商涂',
          duty: ['负责完成公司网站平台的维护工作','与客服进行沟通，了解客户的需求并完成客户需求','对招商页面的布局和效果的实现并兼容主流浏览器和ie7以上','对手机端招商页面的制作和效果实现','精通html、css、javascript、jq；解决各网站的兼容问题，熟悉W3C标准','对公司新产品进行探讨和研究']
        },
        {
          date: '2015/05 - 2016/03',
          company: '安徽软云科技信息技术有限公司',
          duty: ['与客户进行沟通，完成客户需求','与设计师合作并完成新项目的开发','开发混合式app、心理平台、微信商城所有人等','与java程序员合作嵌套html5到原生页面中和h5抽奖页面的制作','与产品经理进行新技术的探讨、研究和对新人的指导','精通html、css、html5、css3、javascript、ajax、jq、mui框架、appcan','对公司产品的维护和新产品的研讨和开发']
        },
        {
          date: '2016/04 - 2018/04',
          company: '豆沙包科技（上海）有限公司',
          duty: ['负责豆沙包微信公众号的开发（产品购买、我的订单、我的补贴、申请理赔、优惠券等）','负责豆沙包小程序的开发（从开户申请以及产品的开发数据交互）','负责豆沙包官网、商户平台、用户管理系统前端框架的搭建以及开发','负责合作方溯源标签的开发以及大姨妈h5商城的开发','负责区块链框架的搭建']
        },
        {
          date: '2018/04 - 2020/04',
          company: '千匠网络',
          duty: ['负责千匠前端架构的搭建','产品开发审核以及任务安排','负责前端开发关键技术问题的攻关和系统优化、协助排查并解决开发过程的技术难题','对element-ui进行二次封装，形成适合我们的通用性模板','PC端静态化页面通用性工具类的封装（jq）','Wap端使用动态路由给个人中心进行配置化渲染','Nuxt 服务端渲染的搭建（主要针对seo）以及nginx的配置','负责提升系统的可维护性、可扩展性']
        },
        {
          date: '2020/05 - 至今',
          company: '信栖科技',
          duty: ['任务的划分以及安排','组件开发，模块化框架设计、以及内置插件开发','制定技术方案，定义可配置化商城首页']
        }
      ]
    }
  }
}
</script>