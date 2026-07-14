import { PORTAL_MEMBER } from "@/lib/mock/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function PortalProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Profile</h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Company and contact details (read-only mock data).
        </p>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle className="text-base">Organization Profile</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label>Company Name</Label>
            <Input className="mt-1.5" defaultValue={PORTAL_MEMBER.companyName} readOnly />
          </div>
          <div>
            <Label>Contact Person</Label>
            <Input className="mt-1.5" defaultValue={PORTAL_MEMBER.contactPerson} readOnly />
          </div>
          <div>
            <Label>Phone</Label>
            <Input className="mt-1.5" defaultValue={PORTAL_MEMBER.phone} readOnly />
          </div>
          <div>
            <Label>Email</Label>
            <Input className="mt-1.5" defaultValue={PORTAL_MEMBER.email} readOnly />
          </div>
          <div>
            <Label>Membership ID</Label>
            <Input className="mt-1.5" defaultValue={PORTAL_MEMBER.membershipId} readOnly />
          </div>
          <div className="sm:col-span-2">
            <Label>Business Address</Label>
            <Input className="mt-1.5" defaultValue={PORTAL_MEMBER.address} readOnly />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
