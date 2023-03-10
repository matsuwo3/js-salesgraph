// 年間の売上と利益のデータ
const report = [
  {
    month: "1",
    revenue: 7700000,
    profit: 1166900,
  },
  {
    month: "2",
    revenue: 8500000,
    profit: 320300,
  },
  {
    month: "3",
    revenue: 8600040,
    profit: 900030,
  },
  {
    month: "4",
    revenue: 9000003,
    profit: 1520000,
  },
  {
    month: "5",
    revenue: 8100000,
    profit: 1220890,
  },
  {
    month: "6",
    revenue: 8772652,
    profit: 610300,
  },
  {
    month: "7",
    revenue: 8087550,
    profit: 910300,
  },
  {
    month: "8",
    revenue: 9985166,
    profit: 543200,
  },
  {
    month: "9",
    revenue: 8448764,
    profit: 741200,
  },
  {
    month: "10",
    revenue: 8406786,
    profit: 342210,
  },
  {
    month: "11",
    revenue: 8094797,
    profit: 710190,
  },
  {
    month: "12",
    revenue: 8838988,
    profit: 815610,
  },
]
/*
let report_label = report.map((el) => {
  return el.month + "月"
})

let report_revenue = 
*/

/*
let pf_10 = []
report.forEach((el) => {
  let revenue = el.revenue
  let profit = el.profit
  if (profit / revenue < 0.1) {
    profit_10.push(el)
  }
})
*/

let pf_10 = report.filter((el) => {
  let prf = el.profit
  let rvn = el.revenue
  return prf / rvn > 0.1
})

// console.log(pf_10)

let rp_label = pf_10.map((el) => {
  return el.month + "月"
})

let rp_rvn = pf_10.map((el) => {
  return el.revenue
})

let rp_prf = pf_10.map((el) => {
  return el.profit
})

const ctx = document.getElementById("myChart")

new Chart(ctx, {
  type: "bar",
  data: {
    labels: rp_label,
    datasets: [
      {
        label: "revenue",
        data: rp_rvn,
        borderWidth: 1,
        backgroundColor: "#9BD0F5",
      },
      {
        label: "profit",
        data: rp_prf,
        borderColor: "#FF6384",
        backgroundColor: "#FFB1C1",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
})

// document.querySelector("#high_profit_month").textContent = rp_label.join("、 ")
let colors = ["red", "blue", "yellow", "green"]

for (let i = 0; i < colors.length; i++) {
  let tes = colors[i] === "red" ? "赤です" : "赤ではありません"
  console.log(tes)
  let tes2 = colors[i] === "blue" ? "青です" : "青ではありません"
  console.log(tes2)
}
