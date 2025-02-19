import Image from 'next/image'
import cooperSilver from '../../../assets/medal-cooper.svg'
import goldMedal from '../../../assets/medal-gold.svg'
import silverMedal from '../../../assets/medal-silver.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Igor Calabraro
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image
            src={goldMedal}
            alt="medalha de ouro"
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Igor Calabraro
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1029
          </span>

          <Image
            src={silverMedal}
            alt="medalha de prata"
            className="absolute top-0 right-8"
          />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Igor Calabraro
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1028
          </span>

          <Image
            src={cooperSilver}
            alt="medalha de bronze"
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  )
}
