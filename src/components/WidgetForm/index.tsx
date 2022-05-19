import { CloseButton } from "../CloseButton";
import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import otherImageUrl from "../../assets/other.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./steps/FeedbackSucessStep";


export const feedbackTypes = {

    BUG: {
        title:'Problema',
        image: {
            source: bugImageUrl,
            alt: "imagem de um desenho de um inseto, lagarta roxa",
        },
    },
    IDEA: {
        title:'Ideia',
        image: {
            source: ideaImageUrl,
            alt:"imagem de um desenho de lampada",
        },
    },
    OTHER: {
        title:'Outro',
        image: {
            source: otherImageUrl,
            alt:"imagem de um balão de pensamento",
        },
    },

}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm () {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback () {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (

        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            
            

           { feedbackSent ? (
               <FeedbackSucessStep onFeedbackRestatRequested={handleRestartFeedback} />
           ) : (
                <>
                     { ! feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
            ) : (
                        <FeedbackContentStep feedbackType={feedbackType}
                        onFeedbackRestartRequested={handleRestartFeedback}
                        onFeedbackSent={()=> setFeedbackSent(true)}
                />
            )}
                </>
           )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500" href="https://rocketseat.com.br" target="_blank">Rocketseat</a>
            </footer>

        </div>
    )
}