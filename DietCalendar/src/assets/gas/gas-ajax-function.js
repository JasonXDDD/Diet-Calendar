function doPost (e) {
  var params = e.parameter

  var user = params.user // 使用者
  var title = params.title // 標題
  var description = params.description // 敘述
  var image = params.image // 照片
  var time = params.time // 時間點

  var SpreadSheet = SpreadsheetApp.openById('1gn1MzKscKZyvThuQRvdL0vIuZFAV5QFBFZE9Tiy1IeE')
  var Sheet = SpreadSheet.getSheets()[0]
  var LastRow = Sheet.getLastRow()

  if (now !== undefined) {
    Sheet.getRange(LastRow, 1).setValue(user)
    Sheet.getRange(LastRow, 2).setValue(title)
    Sheet.getRange(LastRow, 3).setValue(description)
    Sheet.getRange(LastRow, 4).setValue(image)
    Sheet.getRange(LastRow, 5).setValue(time)

    return ContentService.createTextOutput(true)
  }
  // 被亂撞 會回吐這段文字給前端
  return ContentService.createTextOutput('別亂撞我～～ :)')
}

function doGet () {
  var SpreadSheet = SpreadsheetApp.openById('1gn1MzKscKZyvThuQRvdL0vIuZFAV5QFBFZE9Tiy1IeE')
  var Sheet = SpreadSheet.getSheets()[0]
  var LastRow = Sheet.getLastRow()

  var values = Sheet.getSheetValues(LastRow, 1, 1, 12)

  var data = {
    user: values[0][0],
    title: values[0][1],
    description: values[0][2],
    image: values[0][3],
    time: values[0][4]
  }

  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON
  )
}
