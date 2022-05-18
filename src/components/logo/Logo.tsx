import imageLogo from '../../assets/images/logo.png'

const Logo = () => {
    return (<div>
        <picture>

            <img src={imageLogo} alt={'Logo'}/>
        </picture>
    </div>)
}

export default Logo
