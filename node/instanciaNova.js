// uma factory retorna um novo objeto/instancia // sem cache
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}