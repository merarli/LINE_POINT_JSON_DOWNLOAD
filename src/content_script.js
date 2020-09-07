$(function () {
  console.log('拡張機能読み込みました')
})

const exportJson = () => {
  console.log('exportJson...')
  const titles = $('.MdCMN25AcquisitionList > li .mdCMN25Sumally > .mdCMN25Price > span')
  const dates = $('.MdCMN25AcquisitionList > li .mdCMN25Sumally > .mdCMN25Date')
  const points = $('.MdCMN25AcquisitionList > li .mdCMN25Point > .vss-SkeletonPaddingY1-radius > .mdCMN25PointTxt')

  let point_list = []
  for (let i = 0; i < titles.length; i++) {
    point_list.push({
      title: titles.eq(i).text(),
      date: dates.eq(i).text(),
      point: points.eq(i).text()
    })
  }

  console.table(point_list)
  downloadObjectAsJson(point_list,'line_point')
}

downloadObjectAsJson = (exportObj, exportName) => {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href",     dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

$('body').keydown(event => {
  if (event.key === 'e') {
    exportJson()
  }
})
