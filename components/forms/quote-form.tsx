"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { PROJECT_TYPES } from "@/types/index";

export function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    areaSize: "",
    location: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Quote request submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          areaSize: "",
          location: "",
          notes: "",
        });
      } else {
        toast.error(data.error || "Failed to submit quote request");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Quote form error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+254 7XX XXX XXX"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>

        <div>
          <Label htmlFor="projectType">Project Type</Label>
          <Select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            disabled={loading}
          >
            <option value="">Select project type</option>
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="areaSize">Area Size (sq ft)</Label>
          <Input
            id="areaSize"
            name="areaSize"
            type="number"
            placeholder="1000"
            value={formData.areaSize}
            onChange={handleChange}
            disabled={loading}
          />
        </div>

        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            type="text"
            placeholder="Nairobi, Kenya"
            value={formData.location}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="notes">Additional Notes</Label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Tell us more about your project..."
          value={formData.notes}
          onChange={handleChange}
          disabled={loading}
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Submitting..." : "Request Quote"}
      </Button>
    </form>
  );
}
