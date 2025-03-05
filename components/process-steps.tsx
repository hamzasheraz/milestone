import { Check, ArrowRight } from "lucide-react"

export default function ProcessSteps() {
  const steps = [
    {
      number: 1,
      title: "Connect Your Calendar",
      description: "Integrate Milestone AI with your calendar system to automatically schedule and join your meetings.",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      number: 2,
      title: "AI Attends Your Meetings",
      description:
        "Our AI assistant joins your scheduled meetings, listens to discussions, and captures important information.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      number: 3,
      title: "Generate Insights",
      description:
        "After the meeting, Milestone AI creates comprehensive summaries, extracts action items, and analyzes sentiment.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      number: 4,
      title: "Automate Follow-ups",
      description:
        "Action items are automatically assigned to team members and tracked through your preferred project management tools.",
      icon: <CheckSquare className="h-6 w-6" />,
    },
  ]

  return (
    <div className="relative">
      <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-slate-200 z-0" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative z-10 flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground mb-4">
              {step.number}
            </div>
            <h3 className="text-lg font-medium mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>

            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-6 -right-4 text-slate-300">
                <ArrowRight className="h-6 w-6" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 p-6 bg-accent rounded-lg border border-accent">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0 p-4 bg-secondary/10 rounded-full">
            <Check className="h-8 w-8 text-secondary" />
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">The Result: More Productive Meetings</h3>
            <p className="text-muted-foreground">
              With Milestone AI handling the administrative aspects of your meetings, your team can focus on meaningful
              discussions and decision-making. Enjoy up to 80% reduction in meeting follow-up time and improved project
              completion rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Missing imports
import { Calendar, Users, Lightbulb, CheckSquare } from "lucide-react"

