"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Calendar, Trello, Github, FileText, Mail, Clock, Database } from "lucide-react"

interface Integration {
  name: string
  icon: React.ReactNode
  description: string
}

const integrationCategories = {
  communication: [
    {
      name: "Slack",
      icon: <MessageSquare className="h-6 w-6" />,
      description: "Receive meeting summaries and action items directly in your Slack channels.",
    },
    {
      name: "Microsoft Teams",
      icon: <MessageSquare className="h-6 w-6" />,
      description: "Integrate with Teams for seamless meeting attendance and collaboration.",
    },
    {
      name: "Gmail",
      icon: <Mail className="h-6 w-6" />,
      description: "Send meeting summaries and action items via email automatically.",
    },
    {
      name: "Discord",
      icon: <MessageSquare className="h-6 w-6" />,
      description: "Connect with Discord for team communication and updates.",
    },
  ],
  calendar: [
    {
      name: "Google Calendar",
      icon: <Calendar className="h-6 w-6" />,
      description: "Schedule meetings and track attendance with Google Calendar integration.",
    },
    {
      name: "Outlook",
      icon: <Calendar className="h-6 w-6" />,
      description: "Sync with Outlook calendar for meeting management.",
    },
    {
      name: "Apple Calendar",
      icon: <Calendar className="h-6 w-6" />,
      description: "Connect with Apple Calendar for scheduling and reminders.",
    },
    {
      name: "Calendly",
      icon: <Clock className="h-6 w-6" />,
      description: "Integrate with Calendly for easy meeting scheduling.",
    },
  ],
  projectManagement: [
    {
      name: "Trello",
      icon: <Trello className="h-6 w-6" />,
      description: "Create cards for action items and track progress in Trello boards.",
    },
    {
      name: "Asana",
      icon: <FileText className="h-6 w-6" />,
      description: "Automatically create tasks in Asana from meeting action items.",
    },
    {
      name: "Jira",
      icon: <FileText className="h-6 w-6" />,
      description: "Convert action items to Jira tickets for development tracking.",
    },
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      description: "Create issues and track development tasks in GitHub.",
    },
  ],
  database: [
    {
      name: "Notion",
      icon: <FileText className="h-6 w-6" />,
      description: "Store meeting notes and action items in your Notion workspace.",
    },
    {
      name: "Airtable",
      icon: <Database className="h-6 w-6" />,
      description: "Organize meeting data in Airtable for custom workflows.",
    },
    {
      name: "Coda",
      icon: <FileText className="h-6 w-6" />,
      description: "Document meetings and track projects in Coda docs.",
    },
    {
      name: "Monday.com",
      icon: <Database className="h-6 w-6" />,
      description: "Manage projects and tasks from meetings in Monday.com.",
    },
  ],
}

export default function IntegrationShowcase() {
  const [activeCategory, setActiveCategory] = useState("communication")

  return (
    <div className="space-y-8">
      <Tabs defaultValue="communication" onValueChange={setActiveCategory} className="w-full">
        <div className="flex justify-center">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
            <TabsTrigger value="communication">Communication</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="projectManagement">Project Management</TabsTrigger>
            <TabsTrigger value="database">Knowledge Base</TabsTrigger>
          </TabsList>
        </div>

        {Object.entries(integrationCategories).map(([category, integrations]) => (
          <TabsContent key={category} value={category} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {integrations.map((integration: Integration) => (
                <div
                  key={integration.name}
                  className="bg-white p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit">
                      <div className="text-primary">{integration.icon}</div>
                    </div>
                    <h3 className="font-medium">{integration.name}</h3>
                    <p className="text-sm text-muted-foreground">{integration.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">Don't see the integration you need?</p>
        <Button variant="outline">Request an Integration</Button>
      </div>
    </div>
  )
}

