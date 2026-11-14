import { defineType, defineField, defineArrayMember } from "sanity";

export const reviewSchema = defineType({
  name: "review",
  title: "Product Review",
  type: "document",
  groups: [
    { name: "meta", title: "Meta" },
    { name: "verdict", title: "Verdict & Scores" },
    { name: "content", title: "Review Content" },
    { name: "affiliate", title: "Affiliate" },
  ],
  fields: [
    // === META ===
    defineField({
      name: "title",
      title: "Review Title",
      type: "string",
      group: "meta",
      validation: (R) => R.required(),
      description: 'e.g. "Sugar Defender Review — Does It Really Work?"',
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      group: "meta",
      options: { source: "title", maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "productName",
      title: "Product Name",
      type: "string",
      group: "meta",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      group: "meta",
      options: {
        list: [
          "Cognitive Support",
          "Weight Management",
          "Blood Sugar",
          "Cardiovascular",
          "Eye Health",
          "Joint & Mobility",
          "Testosterone",
          "Sleep",
          "Immune Support",
          "Digestive Health",
          "Hair & Skin",
          "Energy",
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Product Image",
      type: "image",
      group: "meta",
      options: { hotspot: true },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
      group: "meta",
      initialValue: "The Truth Review Editorial Team",
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "date",
      group: "meta",
    }),
    defineField({
      name: "updatedAt",
      title: "Last Updated",
      type: "date",
      group: "meta",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Meta Description",
      type: "text",
      group: "meta",
      rows: 2,
      validation: (R) => R.max(160),
    }),

    // === VERDICT & SCORES ===
    defineField({
      name: "verdict",
      title: "Overall Verdict",
      type: "string",
      group: "verdict",
      options: {
        list: [
          { title: "✓ Legit", value: "legit" },
          { title: "✗ Likely Scam", value: "scam" },
          { title: "~ Mixed Evidence", value: "mixed" },
          { title: "? Inconclusive", value: "inconclusive" },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "overallScore",
      title: "Overall Score (0–10)",
      type: "number",
      group: "verdict",
      validation: (R) => R.required().min(0).max(10),
    }),
    defineField({
      name: "scores",
      title: "Category Scores",
      type: "object",
      group: "verdict",
      fields: [
        { name: "ingredients", title: "Ingredients (0–10)", type: "number" },
        { name: "evidence", title: "Clinical Evidence (0–10)", type: "number" },
        { name: "safety", title: "Safety (0–10)", type: "number" },
        { name: "value", title: "Value for Money (0–10)", type: "number" },
        { name: "transparency", title: "Company Transparency (0–10)", type: "number" },
      ],
    }),
    defineField({
      name: "summary",
      title: "Review Summary (TL;DR)",
      type: "text",
      group: "verdict",
      rows: 3,
      validation: (R) => R.required().max(300),
    }),

    // === CONTENT ===
    defineField({
      name: "introduction",
      title: "01. Introduction",
      type: "array",
      group: "content",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "companyClaims",
      title: "02. Company Claims",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          type: "object",
          fields: [{ name: "claim", title: "Claim", type: "string" }],
          preview: { select: { title: "claim" } },
        }),
      ],
    }),
    defineField({
      name: "factOrFiction",
      title: "03. Fact or Fiction?",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            { name: "claim", title: "Claim", type: "string" },
            {
              name: "verdict",
              title: "Verdict",
              type: "string",
              options: {
                list: [
                  { title: "✓ Supported", value: "true" },
                  { title: "✗ Not Supported", value: "false" },
                  { title: "~ Partially Supported", value: "partially-true" },
                  { title: "? Unverified", value: "unverified" },
                ],
              },
            },
            { name: "explanation", title: "Explanation", type: "text", rows: 3 },
          ],
          preview: { select: { title: "claim", subtitle: "verdict" } },
        }),
      ],
    }),
    defineField({
      name: "ingredients",
      title: "04. Ingredients",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            { name: "name", title: "Ingredient Name", type: "string" },
            { name: "dosage", title: "Dosage (e.g. 500mg)", type: "string" },
            { name: "purpose", title: "Stated Purpose", type: "string" },
            { name: "evidence", title: "Evidence Summary", type: "text", rows: 3 },
            {
              name: "rating",
              title: "Evidence Rating",
              type: "string",
              options: {
                list: [
                  { title: "Strong Evidence", value: "strong" },
                  { title: "Moderate Evidence", value: "moderate" },
                  { title: "Weak Evidence", value: "weak" },
                  { title: "No Evidence", value: "none" },
                ],
              },
            },
          ],
          preview: { select: { title: "name", subtitle: "dosage" } },
        }),
      ],
    }),
    defineField({
      name: "clinicalEvidence",
      title: "05. Clinical Evidence",
      type: "array",
      group: "content",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "safety",
      title: "06. Safety & Side Effects",
      type: "array",
      group: "content",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "customerReviews",
      title: "07. Customer Reviews & Complaints",
      type: "array",
      group: "content",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "pricing",
      title: "08. Pricing & Refund Policy",
      type: "array",
      group: "content",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "pros",
      title: "09. Pros",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          type: "object",
          fields: [{ name: "text", title: "Pro", type: "string" }],
          preview: { select: { title: "text" } },
        }),
      ],
    }),
    defineField({
      name: "cons",
      title: "09. Cons",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          type: "object",
          fields: [{ name: "text", title: "Con", type: "string" }],
          preview: { select: { title: "text" } },
        }),
      ],
    }),
    defineField({
      name: "finalVerdict",
      title: "10. Final Verdict",
      type: "array",
      group: "content",
      of: [{ type: "block" }],
    }),

    // === AFFILIATE ===
    defineField({
      name: "affiliateLink",
      title: "Affiliate / Product Link",
      type: "url",
      group: "affiliate",
    }),
    defineField({
      name: "ctaLabel",
      title: "CTA Button Label",
      type: "string",
      group: "affiliate",
      initialValue: "Check Current Price →",
    }),
  ],
  preview: {
    select: { title: "productName", subtitle: "verdict", media: "mainImage" },
    prepare({ title, subtitle }) {
      const icons: Record<string, string> = {
        legit: "✓",
        scam: "✗",
        mixed: "~",
        inconclusive: "?",
      };
      return {
        title,
        subtitle: subtitle ? `${icons[subtitle] ?? ""} ${subtitle}` : "Draft",
      };
    },
  },
});
