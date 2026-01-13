/**
 * Nagaland Departments organized by sections
 * Used for RTI department listing page
 * Structure matches Telangana/Delhi format for consistent rendering
 */

export interface JammuAndKashmirDepartmentSection {
  category: string;
  items: string[];
}

// Alias for Rajasthan (using same structure as Nagaland)
export type DepartmentSection = JammuAndKashmirDepartmentSection;

export const jammuAndKashmirDepartments: JammuAndKashmirDepartmentSection[] = [
  {
    category: 'RTI Nagaland General Administration Department',
    items: [
      'RTI Nagaland General Administration Department',
      'RTI Nagaland Home Department',
      'RTI Nagaland Police Department',
      'RTI Nagaland Law & Justice Department',
      'RTI Nagaland Election Department',
    ]},
  {
    category: 'RTI Nagaland Finance Department',
    items: [
      'RTI Nagaland Finance Department',
      'RTI Nagaland Revenue Department',
      'RTI Nagaland Registration & Stamps Department',
    ]},
  {
    category: 'RTI Nagaland Education & Skill Development',
    items: [
      'RTI Nagaland School Education Department',
      'RTI Nagaland Higher Education Department',
      'RTI Nagaland Technical Education Department',
      'RTI Nagaland Youth Resources & Sports Department',
    ]},
  {
    category: 'RTI Nagaland Health & Medical Services',
    items: [
      'RTI Nagaland Health & Family Welfare Department',
    ]},
  {
    category: 'RTI Nagaland Infrastructure & Development',
    items: [
      'RTI Nagaland Public Works Department',
      'RTI Nagaland Urban Development Department',
      'RTI Nagaland Transport Department',
      'RTI Nagaland Rural Development Department',
    ]},
  {
    category: 'RTI Nagaland Agriculture & Rural Economy',
    items: [
      'RTI Nagaland Horticulture Department',
      'RTI Nagaland Animal Husbandry & Veterinary Department',
    ]},
  {
    category: 'RTI Nagaland Industries, Commerce & Tourism',
    items: [
      'RTI Nagaland Industries & Commerce Department',
      'RTI Nagaland Tourism Department',
    ]},
  {
    category: 'RTI Nagaland Environment & Forest',
    items: [
      'RTI Nagaland Forest, Environment & Climate Change Department',
    ]},
  {
    category: 'RTI Nagaland Social Welfare & Employment',
    items: [
      'RTI Nagaland Social Welfare Department',
      'RTI Nagaland Labour & Employment Department',
      'RTI Nagaland Tribal Affairs Department',
    ]},
  {
    category: 'RTI Nagaland Information Technology & Culture',
    items: [
      'RTI Nagaland Information Technology & Communication Department',
      'RTI Nagaland Information & Public Relations Department',
    ]}];

// Export for Rajasthan (using Nagaland structure for now)
export const rajasthanDepartments: DepartmentSection[] = jammuAndKashmirDepartments;

