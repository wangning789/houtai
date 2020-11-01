<template>
  <div>
    <el-card class="box-card">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column type="expand">
          <template slot-scope="scope" v-if="scope.row.children&&scope.row.children.length>0">
            <div v-for="item in scope.row.children" :key="item.id">
              <div style="display:flex  ">
                <div class="onelabel">
                  <el-tag
                    closable
                    :disable-transitions="false"
                    @close="handleClose(item)"
                  >{{item.authName}}</el-tag>
                  <div class="el-icon-caret-right"></div>
                </div>

                <div>
                  <div v-for="item1 in item.children" :key="item1.id">
                    <div style="display:flex">
                      <div class="twolabel">
                        <el-tag
                          closable
                          type="success"
                          :disable-transitions="false"
                          @close="handleClose(item1)"
                        >{{item1.authName}}</el-tag>
                        <div class="el-icon-caret-right"></div>
                      </div>
                      <div v-if="item1.children&&item1.children.length>0" style="display:flex">
                        <div v-for="item2 in item1.children" :key="item2.id">
                          <div class="threelabel">
                            <el-tag
                              closable
                              type="warning"
                              :disable-transitions="false"
                              @close="handleClose(item2)"
                            >{{item2.authName}}</el-tag>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- <div v-for="(item1,index1) in item" :key="index1">
                    <el-tag   :disable-transitions="false" closable @close="handleClose(42452)"> {{item.id}}</el-tag>
            </div>-->
          </template>
        </el-table-column>

        <template v-for="(item,index) in msg" type="expand">
          <el-table-column
            v-if="item.type"
            :type="item.type"
            :key="index"
            :label="item.label"
            :width="item.width"
            :align="item.align"
          ></el-table-column>
          <el-table-column
            v-else
            :key="index"
            :label="item.label"
            :width="item.width"
            :align="item.align"
          >
            <template slot-scope="scope">
              <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
              <template v-else>{{scope.row[item.prop]}}</template>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Role",
  props: {
    //   数据
    tableData: {
      type: Array,
      required: true
    },

    // 表单信息
    msg: {
      type: Array,
      required: true
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    handleClose(item) {
      console.log(item);
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style>
.threelabel {
  margin: 20px 10px;
  display: flex;
}
.onelabel {
  margin: 20px 0px;
  display: flex;
  align-items: center;
}
.twolabel {
  margin: 20px 50px;
}
.nnn {
  display: flex;
}

.box2 {
  background-color: chocolate;
}
</style>