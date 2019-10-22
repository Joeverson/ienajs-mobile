export default Mask = {
  tel: v => {
    return v.replace(/\D/g, '').replace(/(\d{2})(\d)(\d{4})(\d{4})/, '($1) $2 $3-$4')
  },
  utel: v => v.replace(/\D/g, '').replace("-", '').replace("(", '').replace(")", '')
}
