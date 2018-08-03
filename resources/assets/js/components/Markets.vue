<template>
    <div class="oneWidget mrgBtm markets">
        <div class="mainTitle">
            <div class="name">الاسواق</div>
        </div>
        <hr>
        <div class="h-padding">
            <div class="tabs">
                <a href="#" v-for="(market,index) in markets" :key="market.type" v-text="market.type" :class="marketActiveClass(market.type)" @click.prevent="switchMarketIndex(index)"></a>
            </div>
            <div v-for="market in markets" :key="market.type">

                <div v-if="isActive(market.type)">
                    <div class="font-4 v-padding ltrDir clearfix">
                        <span class="pullLeft" v-text="market.current_points"></span>
                        <span class="pullRight brand-color" v-text="market.points_rate + ' ' + market.points_difference"></span>
                    </div>
                </div>
            </div>
            <div class="graph" ref="graph">

            </div>
            <div v-for="market in markets" :key="market.type">

                <div v-if="isActive(market.type)">

                    <div class="font-medium tableDis tradingNums">
                        <div class="oneCell">
                            <div>حجم التداول</div>
                            <div class="brand-color" v-text="market.volume"></div>
                        </div>
                        <div class="oneCell">
                            <div>قيمة التداول</div>
                            <div class="brand-color" v-text="market.turnover"></div>
                        </div>
                        <div class="oneCell">
                            <div>عدد العمليات</div>
                            <div class="brand-color" v-text="market.trades"></div>
                        </div>
                    </div>
                    <div class="dataBar clearfix">
                        <div class="one" :style="{ width: winningCompaniesWidth }">
                            <div v-text="market.up_companies"></div>
                            <div class="thebar"></div>
                            <div>رابحه</div>
                        </div>
                        <div class="one" :style="{ width: unchangedCompaniesWidth }">
                            <div v-text="market.flat_companies"></div>
                            <div class="thebar"></div>
                            <div>ثابته</div>
                        </div>
                        <div class="one" :style="{ width: losingCompaniesWidth }">
                            <div v-text="market.down_companies"></div>
                            <div class="thebar"></div>
                            <div>خاسره</div>
                        </div>
                    </div>
                    <div class="brand-bg smallPadding textCentered white-color">الشركات المتداوله
                        <span v-text="market.traded_stocks"></span>
                    </div>
                    <div class="mainPadding brand-color textCentered font-2 fontBold">الشركات الاكثر</div>
                    <div class="tabs tabs2">
                        <a href="#" :class="companyActiveClass('win')" @click.prevent="switchCompanyTab('win')">ربحًا</a>
                        <a href="#" :class="companyActiveClass('loss')" @click.prevent="switchCompanyTab('loss')">خسارة</a>
                        <a href="#" :class="companyActiveClass('value')" @click.prevent="switchCompanyTab('value')">قيمة</a>
                        <a href="#" :class="companyActiveClass('quantity')" @click.prevent="switchCompanyTab('quantity')">كمية</a>
                    </div>
                    <div class="allCompanies">
                        <div class="one tableDis" v-for="company in activeCompanies">
                            <div class="oneCell" v-text="company.name"></div>
                            <div class="oneCell" v-text="company.first_value"></div>
                            <div class="oneCell">
                                <i :class="companyArrowClass(company)"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      activeMarketIndex: 0,
      activeCompanyTab: "win"
    };
  },
  created() {
    this.$store.dispatch("fetchMarkets");
    this.$store.dispatch("fetchCompanies", this.activeCompanyTab);
  },
  computed: {
    activeMarketName() {
      return this.activeMarketIndex === null
        ? ""
        : this.markets[this.activeMarketIndex].type;
    },
    activeCompanies() {
      return this[this.activeCompanyTab + "Companies"];
    },

    winningCompaniesWidth() {
      return this.activeMarketIndex !== null
        ? this.getPercentage(
            this.markets[this.activeMarketIndex].up_companies,
            this.markets[this.activeMarketIndex].traded_stocks
          )
        : "0%";
    },
    losingCompaniesWidth() {
      return this.activeMarketIndex !== null
        ? this.getPercentage(
            this.markets[this.activeMarketIndex].down_companies,
            this.markets[this.activeMarketIndex].traded_stocks
          )
        : "0%";
    },
    unchangedCompaniesWidth() {
      return this.activeMarketIndex !== null
        ? this.getPercentage(
            this.markets[this.activeMarketIndex].flat_companies,
            this.markets[this.activeMarketIndex].traded_stocks
          )
        : "0%";
    },

    ...mapState({
      markets: state => state.mainStore.markets,
      winCompanies: state => state.mainStore.winCompanies,
      lossCompanies: state => state.mainStore.lossCompanies,
      valueCompanies: state => state.mainStore.valueCompanies,
      quantityCompanies: state => state.mainStore.quantityCompanies
    })
  },
  methods: {
    isActive(name) {
      return this.activeMarketName === name;
    },
    marketActiveClass(name) {
      return this.isActive(name) ? "active" : "";
    },
    switchMarketIndex(index) {
      this.activeMarketIndex = index;
      this.activeCompanyTab = "win";
    },

    isActiveCompany(name) {
      return this.activeCompanyTab === name;
    },
    companyActiveClass(name) {
      return this.isActiveCompany(name) ? "active" : "";
    },
    switchCompanyTab(name) {
      this.activeCompanyTab = name;
    },
    getPercentage(part, whole) {
      return parseInt(part) / parseInt(whole) * 100 + "%";
    },

    companyArrowClass(company) {
      return company.first_value_level === "down"
        ? "icon-down-dir"
        : "icon-up-dir";
      // return value <= 0 ? 'icon-down-dir' : 'icon-up-dir';
    },
    initGraph(data) {
      new Highcharts.Chart({
        chart: {
          type: "spline",
          renderTo: this.$refs["graph"]
        },
        title: {
          text: ""
        },
        subtitle: {
          text: ""
        },
        xAxis: {
          title: {
            text: ""
          }
        },
        yAxis: {
          title: {
            text: ""
          }
        },
        tooltip: {
          headerFormat: "",
          pointFormat: "{point.y:.2f}"
        },
        plotOptions: {
          series: {
            color: "#C73133"
          },
          area: {
            marker: {
              radius: 2
            },
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1
              }
            },
            threshold: null
          }
        },
        series: [
          {
            type: "area",
            data: data.chart
          }
        ]
      });
    }
  },
  watch: {
    markets(val) {
      if (val.length) {
        this.activeMarketIndex = 0;
        this.activeCompanyTab = "win";
      }
      setTimeout(() => {
        this.initGraph(val[0]);
      }, 1000);
    },
    activeMarketIndex(index) {
      this.initGraph(this.markets[index]);
    },
    activeCompanyTab(name) {
      if (this.activeCompanies.length === 0) {
        this.$store.dispatch("fetchCompanies", name);
      }
    }
  }
};
</script>


<style>
g.highcharts-legend-item.highcharts-area-series.highcharts-color-undefined.highcharts-series-0{
 display: none;
}
text.highcharts-credits{
    display: none;
}
</style>
