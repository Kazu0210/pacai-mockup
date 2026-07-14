"use client";

import { useState } from "react";
import { Calendar, CheckCircle2, MapPin, Users } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/shared/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MOCK_EVENTS, type MockEvent } from "@/lib/mock/data";

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-PH", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function EventsPage() {
  const [selected, setSelected] = useState<MockEvent | null>(null);
  const [registered, setRegistered] = useState(false);

  const openEvent = (event: MockEvent) => {
    setSelected(event);
    setRegistered(false);
  };

  const register = () => {
    setRegistered(true);
    toast.success("Registered for event (mock)");
  };

  return (
    <>
      <PageHeader
        badge="Events"
        title="Upcoming Events & Training"
        description="Workshops, briefings, and networking forums for PACAI members and industry partners."
      />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {MOCK_EVENTS.map((event) => (
            <Card key={event.id} className="flex flex-col transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex flex-wrap gap-2">
                  <Badge variant="secondary">{event.type}</Badge>
                </div>
                <CardTitle className="text-lg leading-snug">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <p className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-ph-blue" aria-hidden="true" />
                  {formatDate(event.date)} · {event.time}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-ph-blue" aria-hidden="true" />
                  {event.location}
                </p>
                <p className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-ph-blue" aria-hidden="true" />
                  {event.registered} / {event.spots} registered
                </p>
                <p className="line-clamp-2 pt-1">{event.description}</p>
              </CardContent>
              <CardFooter>
                <Button type="button" className="w-full" onClick={() => openEvent(event)}>
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="sm:max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <Badge variant="secondary" className="mb-2 w-fit">
                  {selected.type}
                </Badge>
                <DialogTitle>{selected.title}</DialogTitle>
                <DialogDescription className="space-y-2 pt-2 text-left">
                  <span className="block">
                    {formatDate(selected.date)} · {selected.time}
                  </span>
                  <span className="block">{selected.location}</span>
                </DialogDescription>
              </DialogHeader>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {selected.description}
              </p>
              <p className="text-sm text-slate-500">
                {selected.registered} of {selected.spots} spots filled
              </p>

              {registered ? (
                <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  You are registered for this event (mock confirmation).
                </div>
              ) : (
                <DialogFooter>
                  <Button type="button" className="w-full" onClick={register}>
                    Register (UI Only)
                  </Button>
                </DialogFooter>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
