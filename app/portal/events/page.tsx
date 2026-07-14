import Link from "next/link";
import { MOCK_EVENTS } from "@/lib/mock/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function PortalEventsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Events</h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Upcoming PACAI events available for registration.
          </p>
        </div>
        <Button asChild size="sm" variant="outline">
          <Link href="/events">Browse All Events</Link>
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {MOCK_EVENTS.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <Badge variant="secondary" className="mb-2 w-fit">
                {event.type}
              </Badge>
              <CardTitle className="text-base leading-snug">{event.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
              <p>{event.date}</p>
              <p>{event.location}</p>
              <p>
                {event.registered}/{event.spots} registered
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
