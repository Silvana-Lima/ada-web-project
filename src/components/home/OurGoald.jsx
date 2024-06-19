import ourGoalImg from '../../assets/ourGoalImg.png'
import { BannerDisplay } from '../BannerDisplay'

export const OurGoald = () => {
  return (
    <BannerDisplay
      bgColor={'yellow.100'}
      txtColor={'gray.800'}
      txt={'Nuestro objetivo es'}
      highlightxt={'reducir la brecha de género en tecnología'}
      HLColorTxt={'gray.800'}
      description={
        'Ada brinda ayudas económicas en forma de pagos diferidos a las mujeres y feminidades que quieran capacitarse y entrar en el mundo IT.'
      }
      buttonTxt={'Información sobre ayudas económicas'}
      img={ourGoalImg}
      imgMobile={ourGoalImg}
    />
  )
}
