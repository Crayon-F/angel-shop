export default{
  formatDate(val, type = 1) {
    if (!val) {
        return '--'
    }
    if (val === 0) {
        return '--'
    }
    let result = ''
    let date = new Date(parseInt(val))
    let year = date.getFullYear()
    let month = this.pad(date.getMonth() + 1)
    let day = this.pad(date.getDate())
    let housrs = this.pad(date.getHours())
    let minutes = this.pad(date.getMinutes())
    let seconds = this.pad(date.getSeconds())
    switch (type) {
        case 1:
            result = year + '-' + month + '-' + day + ' ' + housrs + ':' + minutes + ':' + seconds
            break
        case 2:
            result = month + '-' + day + ' ' + housrs + ':' + minutes
            break
        case 3:
            result = year + '-' + month + '-' + day
            break
        case 4:
            result = minutes + ':' + seconds
            break
        case 5:
            result = year + '-' + month + '-' + day + ' ' + housrs + ':' + minutes
            break
        case 6:
            result = housrs + ':' + minutes + ':' + seconds
            break
        default:
            result = year + '-' + month + '-' + day + ' ' + housrs + ':' + minutes + ':' + seconds
            break
    }
    return result
  },
  pad(num) {
      return new Array(2 - ('' + num).length + 1).join(0) + num
  },
}